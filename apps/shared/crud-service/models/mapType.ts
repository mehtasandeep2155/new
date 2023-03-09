import { Prisma } from '@prisma/client';
import { CrudTypeMap } from './crudMapType';

export class UserTypeMap implements CrudTypeMap {
  aggregate: Prisma.UserAggregateArgs;
  count: Prisma.UserCountArgs;
  create: Prisma.UserCreateArgs;
  delete: Prisma.UserDeleteArgs;
  deleteMany: Prisma.UserDeleteManyArgs;
  findFirst: Prisma.UserFindFirstArgs;
  findMany: Prisma.UserFindManyArgs;
  findUnique: Prisma.UserFindUniqueArgs;
  update: Prisma.UserUpdateArgs;
  updateMany: Prisma.UserUpdateManyArgs;
  upsert: Prisma.UserUpsertArgs;
}

export class ColorTypeMap implements CrudTypeMap {
  aggregate: Prisma.ColorAggregateArgs;
  count: Prisma.ColorArgs;
  create: Prisma.ColorCreateArgs;
  delete: Prisma.ColorDeleteArgs;
  deleteMany: Prisma.ColorDeleteManyArgs;
  findFirst: Prisma.ColorFindFirstArgs;
  findMany: Prisma.ColorFindManyArgs;
  findUnique: Prisma.ColorFindUniqueArgs;
  update: Prisma.ColorUpdateArgs;
  updateMany: Prisma.ColorUpdateManyArgs;
  upsert: Prisma.ColorUpsertArgs;
}

export class UomTypeMap implements CrudTypeMap {
  aggregate: Prisma.UomAggregateArgs;
  count: Prisma.UomArgs;
  create: Prisma.UomCreateArgs;
  delete: Prisma.UomDeleteArgs;
  deleteMany: Prisma.UomDeleteManyArgs;
  findFirst: Prisma.UomFindFirstArgs;
  findMany: Prisma.UomFindManyArgs;
  findUnique: Prisma.UomFindUniqueArgs;
  update: Prisma.UomUpdateArgs;
  updateMany: Prisma.UomUpdateManyArgs;
  upsert: Prisma.UomUpsertArgs;
}

export class ProductCategoryTypeMap
  implements CrudTypeMap
{
  aggregate: Prisma.Product_typeAggregateArgs;
  count: Prisma.Product_typeArgs;
  create: Prisma.Product_typeCreateArgs;
  delete: Prisma.Product_typeDeleteArgs;
  deleteMany: Prisma.Product_typeDeleteManyArgs;
  findFirst: Prisma.Product_typeFindFirstArgs;
  findMany: Prisma.Product_typeFindManyArgs;
  findUnique: Prisma.Product_typeFindUniqueArgs;
  update: Prisma.Product_typeUpdateArgs;
  updateMany: Prisma.Product_typeUpdateManyArgs;
  upsert: Prisma.Product_typeUpsertArgs;
}

export class ProductVariantTypeMap
  implements CrudTypeMap
{
  aggregate: Prisma.Product_variantAggregateArgs;
  count: Prisma.Product_variantArgs;
  create: Prisma.Product_variantCreateArgs;
  delete: Prisma.Product_variantDeleteArgs;
  deleteMany: Prisma.Product_variantDeleteManyArgs;
  findFirst: Prisma.Product_variantFindFirstArgs;
  findMany: Prisma.Product_variantFindManyArgs;
  findUnique: Prisma.Product_variantFindUniqueArgs;
  update: Prisma.Product_variantUpdateArgs;
  updateMany: Prisma.Product_variantUpdateManyArgs;
  upsert: Prisma.Product_variantUpsertArgs;
}

export class ProductDimensionTypeMap
  implements CrudTypeMap
{
  aggregate: Prisma.Product_dimensionAggregateArgs;
  count: Prisma.Product_dimensionArgs;
  create: Prisma.Product_dimensionCreateArgs;
  delete: Prisma.Product_dimensionDeleteArgs;
  deleteMany: Prisma.Product_dimensionDeleteManyArgs;
  findFirst: Prisma.Product_dimensionFindFirstArgs;
  findMany: Prisma.Product_dimensionFindManyArgs;
  findUnique: Prisma.Product_dimensionFindUniqueArgs;
  update: Prisma.Product_dimensionUpdateArgs;
  updateMany: Prisma.Product_dimensionUpdateManyArgs;
  upsert: Prisma.Product_dimensionUpsertArgs;
}

export class RateTypeMap implements CrudTypeMap {
  aggregate: Prisma.RateAggregateArgs;
  count: Prisma.RateArgs;
  create: Prisma.RateCreateArgs;
  delete: Prisma.RateDeleteArgs;
  deleteMany: Prisma.RateDeleteManyArgs;
  findFirst: Prisma.RateFindFirstArgs;
  findMany: Prisma.RateFindManyArgs;
  findUnique: Prisma.RateFindUniqueArgs;
  update: Prisma.RateUpdateArgs;
  updateMany: Prisma.RateUpdateManyArgs;
  upsert: Prisma.RateUpsertArgs;
}

export class ProductTypeMap
  implements CrudTypeMap
{
  aggregate: Prisma.ProductAggregateArgs;
  count: Prisma.ProductArgs;
  create: Prisma.ProductCreateArgs;
  delete: Prisma.ProductDeleteArgs;
  deleteMany: Prisma.ProductDeleteManyArgs;
  findFirst: Prisma.ProductFindFirstArgs;
  findMany: Prisma.ProductFindManyArgs;
  findUnique: Prisma.ProductFindUniqueArgs;
  update: Prisma.ProductUpdateArgs;
  updateMany: Prisma.ProductUpdateManyArgs;
  upsert: Prisma.ProductUpsertArgs;
}

export class CompanyTypeMap
  implements CrudTypeMap
{
  aggregate: Prisma.CompanyAggregateArgs;
  count: Prisma.CompanyArgs;
  create: Prisma.CompanyCreateArgs;
  delete: Prisma.CompanyDeleteArgs;
  deleteMany: Prisma.CompanyDeleteManyArgs;
  findFirst: Prisma.CompanyFindFirstArgs;
  findMany: Prisma.CompanyFindManyArgs;
  findUnique: Prisma.CompanyFindUniqueArgs;
  update: Prisma.CompanyUpdateArgs;
  updateMany: Prisma.CompanyUpdateManyArgs;
  upsert: Prisma.CompanyUpsertArgs;
}

export class SubCompanyTypeMap
  implements CrudTypeMap
{
  aggregate: Prisma.Sub_companyAggregateArgs;
  count: Prisma.Sub_companyArgs;
  create: Prisma.Sub_companyCreateArgs;
  delete: Prisma.Sub_companyDeleteArgs;
  deleteMany: Prisma.Sub_companyDeleteManyArgs;
  findFirst: Prisma.Sub_companyFindFirstArgs;
  findMany: Prisma.Sub_companyFindManyArgs;
  findUnique: Prisma.Sub_companyFindUniqueArgs;
  update: Prisma.Sub_companyUpdateArgs;
  updateMany: Prisma.Sub_companyUpdateManyArgs;
  upsert: Prisma.Sub_companyUpsertArgs;
}

export class PurchaseOrderTypeMap
  implements CrudTypeMap
{
  aggregate: Prisma.Purchase_orderAggregateArgs;
  count: Prisma.Purchase_orderArgs;
  create: Prisma.Purchase_orderCreateArgs;
  delete: Prisma.Purchase_orderDeleteArgs;
  deleteMany: Prisma.Purchase_orderDeleteManyArgs;
  findFirst: Prisma.Purchase_orderFindFirstArgs;
  findMany: Prisma.Purchase_orderFindManyArgs;
  findUnique: Prisma.Purchase_orderFindUniqueArgs;
  update: Prisma.Purchase_orderUpdateArgs;
  updateMany: Prisma.Purchase_orderUpdateManyArgs;
  upsert: Prisma.Purchase_orderUpsertArgs;
}
