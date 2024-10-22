export interface IProduct {
  id: string;
  name: string;
  description: string;
  price: number;
  stockQuantity: number;
  category: string;
  images: string[];
  isDeleted: boolean;
}
