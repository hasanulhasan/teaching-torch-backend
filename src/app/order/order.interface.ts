export default interface IOrder {
  title: string;
  instructors: string[];
  img: string;
  price: string;
  category: string;
  seat: string;
  rating: string;
  status: boolean;
  description: string;
  features: string[];
  reviews: string[];
  isPaid: boolean;
  userEmail: string
}