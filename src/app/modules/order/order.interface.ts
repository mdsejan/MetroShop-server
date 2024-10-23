export interface IOrderItem {
  productId: string;
  name: string;
  price: number;
  quantity: number;
}

export interface IOrder {
  _id: string;
  userId: string;
  orderItems: IOrderItem[];
  totalAmount: number;
  paymentStatus: "pending" | "paid" | "failed";
  orderStatus: "pending" | "shipped" | "delivered" | "canceled";
  paymentMethod: "credit_card" | "paypal" | "stripe" | "cod";
  shippingAddress: IShippingAddress;
  orderDate: Date;
  updatedAt: Date;
  isCanceled: boolean;
}

export interface IShippingAddress {
  street: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
}

export interface IOrderHistory {
  userId: string;
  orders: IOrder[];
}
