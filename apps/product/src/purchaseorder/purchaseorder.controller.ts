import { Controller, Get } from '@nestjs/common';
import {
  Body,
  Delete,
  Param,
  Patch,
  Post,
} from '@nestjs/common/decorators';
import { PurchaseOrderDto } from './dto/purchaseorder.dto';
import { PurchaseorderService } from './purchaseorder.service';

@Controller('purchaseorder')
export class PurchaseorderController {
  constructor(
    private purchaseorderService: PurchaseorderService,
  ) {}

  @Get()
  async getPurchaseOrder() {
    return this.purchaseorderService.getPurchaseOrder();
  }

  @Get(':id')
  async getPurchaseOrderById(
    @Param('id') id: string,
  ) {
    return this.purchaseorderService.getPurchaseOrderById(
      id,
    );
  }

  @Post()
  async createPurchaseOrder(
    @Body() dto: PurchaseOrderDto,
  ) {
    return this.purchaseorderService.createPurchaseOrder(
      dto,
    );
  }

  @Patch()
  async updatePurchaseOrder(
    @Param() id: string,
    @Body() dto: PurchaseOrderDto,
  ) {
    return this.purchaseorderService.updatePurchaseOrder(
      id,
      dto,
    );
  }

  @Delete(':id')
  async deletePurchaseOrder(
    @Param('id') id: string,
  ) {
    return this.purchaseorderService.delete(id);
  }
}
