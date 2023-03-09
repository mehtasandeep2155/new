import { Body, Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { CrudService } from '../../shared/crud-service/crud.service';
import { PurchaseOrderTypeMap } from '../../shared/crud-service/models/mapType';
import { prismaError } from '../../shared/error-handling/error-functions';
import { PrismaService } from '../../shared/prisma/prisma.service';
import { PurchaseOrderDto } from './dto/purchaseorder.dto';

@Injectable()
export class PurchaseorderService extends CrudService<
  Prisma.Purchase_orderDelegate<
    | Prisma.RejectOnNotFound
    | Prisma.RejectPerOperation
    | false
    | undefined
  >,
  PurchaseOrderTypeMap
> {
  constructor(
    private readonly prisma: PrismaService,
  ) {
    super(prisma.purchase_order);
  }

  async getPurchaseOrder() {
    try {
      return await this.prisma.purchase_order.findMany(
        {
          include: {
            products: true,
          },
        },
      );
    } catch (err) {
      prismaError(err);
    }
  }

  async getPurchaseOrderById(id: string) {
    try {
      return await this.prisma.purchase_order.findUnique(
        {
          where: {
            id,
          },
          include: {
            products: true,
          },
        },
      );
    } catch (err) {
      prismaError(err);
    }
  }

  async createPurchaseOrder(
    dto: PurchaseOrderDto,
  ) {
    try {
      let productData = [];
      let netAmounts = {
        netWeight: 0,
        netCoatingAmount: 0,
      };

      for (const id of dto.product) {
        const record =
          await this.prisma.product.findUnique({
            where: {
              id,
            },
            include: { rate: true },
          });
        productData.push({
          count: record?.count,
          weight: record?.weight,
          single_item_rate: record?.rate?.rate,
          coating_amount:
            record?.count * record?.rate?.rate,
        });
        netAmounts.netWeight =
          netAmounts.netWeight + record.weight;
        netAmounts.netCoatingAmount =
          netAmounts.netCoatingAmount +
          record.count * record.rate.rate;
      }

      console.log(productData);
      const gross_amount =
        netAmounts.netCoatingAmount +
        netAmounts.netWeight * dto.cost_per_kg;

      let net_amount = 0;
      dto.coating_discount
        ? (net_amount =
            gross_amount - dto.coating_discount)
        : (net_amount = gross_amount);

      let final_amount = 0;
      dto.tax
        ? (final_amount =
            net_amount +
            net_amount * (dto.tax / 100))
        : (final_amount = net_amount);

      return await this.prisma.purchase_order.create(
        {
          data: {
            challan_number: dto.challan_number,
            customer_name: dto.customer_name,
            order_number: dto.order_number,
            products: {
              connect: dto.product.map((id) => {
                return {
                  id: id,
                };
              }),
            },
            has_raw_material:
              dto.has_raw_material,
            cost_per_kg: dto.cost_per_kg,
            coating_amount:
              netAmounts.netCoatingAmount,
            net_weight: netAmounts.netWeight,
            gross_amount: gross_amount,
            coating_discount:
              dto.coating_discount,
            net_amount: net_amount,
            tax: dto.tax,
            final_amount: final_amount,
          },
          include: {
            products: true,
          },
        },
      );
    } catch (err) {
      prismaError(err);
    }
  }

  async updatePurchaseOrder(
    id: string,
    dto: PurchaseOrderDto,
  ) {
    try {
      let productData = [];
      let netAmounts = {
        netWeight: 0,
        netCoatingAmount: 0,
      };

      for (const id of dto.product) {
        const record =
          await this.prisma.product.findUnique({
            where: {
              id,
            },
            include: { rate: true },
          });
        productData.push({
          count: record?.count,
          weight: record?.weight,
          single_item_rate: record?.rate?.rate,
          coating_amount:
            record?.count * record?.rate?.rate,
        });
        netAmounts.netWeight =
          netAmounts.netWeight + record.weight;
        netAmounts.netCoatingAmount =
          netAmounts.netCoatingAmount +
          record.count * record.rate.rate;
      }

      console.log(productData);
      const gross_amount =
        netAmounts.netCoatingAmount +
        netAmounts.netWeight * dto.cost_per_kg;

      let net_amount = 0;
      dto.coating_discount
        ? (net_amount =
            gross_amount - dto.coating_discount)
        : (net_amount = gross_amount);

      let final_amount = 0;
      dto.tax
        ? (final_amount =
            net_amount +
            net_amount * (dto.tax / 100))
        : (final_amount = net_amount);

      return await this.prisma.purchase_order.update(
        {
          where: {
            id,
          },
          data: {
            challan_number: dto.challan_number,
            customer_name: dto.customer_name,
            order_number: dto.order_number,
            products: {
              connect: dto.product.map((id) => {
                return {
                  id: id,
                };
              }),
            },
            has_raw_material:
              dto.has_raw_material,
            cost_per_kg: dto.cost_per_kg,
            coating_amount:
              netAmounts.netCoatingAmount,
            net_weight: netAmounts.netWeight,
            gross_amount: gross_amount,
            coating_discount:
              dto.coating_discount,
            net_amount: net_amount,
            tax: dto.tax,
            final_amount: final_amount,
          },
          include: {
            products: true,
          },
        },
      );
    } catch (err) {
      prismaError(err);
    }
  }
}
