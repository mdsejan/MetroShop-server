export interface IProduct {
  name: string;
  description: string;
  price: number;
  stockQuantity: number;
  category: string;
  images: string[];
  isDeleted: boolean;
}
