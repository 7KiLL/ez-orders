export interface Garnish {
  Id: number;
  ItemId: any;
  FranchiseId: any;
  BranchId: any;
  Name: string;
  PrintName: any;
  Description: any;
  Price: number;
  Image: any;
  ImageUrl: any;
  Order: number;
  GarnishGroupId: any;
  GeneralGarnishGroupId: any;
  CatalogNumber: any;
  IsItem: boolean;
  MaxAmount: any;
  Printers: any;
  Print: boolean;
}

export interface OrderItem {
  Name: string;
  PrintName: any;
  CatalogNumber: any;
  Garnishes: Garnish[];
  Items: any;
  Amount: number;
  Comment: any;
  SpecialRequests: string;
  Sum: number;
  Price: number;
  PriceInCombo: number;
  ItemId: number;
  ComboItemId: any;
  ComboId: any;
  ItemComboItemId: any;
  ParentItemId: any;
  IsScratchCoupon: boolean;
  ScratchCouponId: number;
  Printers: any[];
  Print: boolean;
}

export interface Payment {
  CardNumber: any;
  ConfirmationCode: any;
  RefundConfirmationCode: any;
  SumPaid: number;
  RefundSum: number;
  PaymentType: string;
}

export interface Order {
  Id: number;
  BranchId: number;
  BranchName: any;
  IsDelivery: boolean;
  IsTakeAway: boolean;
  IsKioskOrder: boolean;
  IsFutureOrder: boolean;
  OrderItems: OrderItem[];
  OrderPizzas: any[];
  Combos: any[];
  Sum: number;
  DiscountSum: number;
  DiscountTypeId: string;
  FirstName: string;
  LastName: string;
  Email: any;
  Phone: string;
  ExtraPhone: any;
  Code: any;
  Address: string;
  AddressEn: string;
  UserCity: any;
  Street: any;
  StreetNum: number;
  Floor: any;
  ApartmentNum: any;
  DeliveryFee: number;
  Comments: any;
  PaymentTypeId: number;
  PaymentTypeStr: string;
  OrderStatusId: number;
  OrderStatusStr: any;
  OrderUserStatusId: number;
  OrderUserStatusStr: any;
  DateTime: string;
  FutureDateTime: string;
  KioskName: string;
  CuponDiscountSum: number;
  CompanyId: any;
  KioskOrderId: number;
  FutureDeliveryTime: any;
  DeliveryComments: any;
  Payments: Payment[];
}


