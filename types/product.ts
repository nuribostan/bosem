export interface SubProduct {
  id: number;
  title: string;
  image: string;
  alt: string;
  desc: string;
  brand: string;
  url?: string; 
}

export interface BrandGroup {
  id: number;
  brand: string;
  types: SubProduct[];
}

export interface Product {
  id: number;
  title: string;
  image: string;
  alt: string;
  desc: string;
  url: string;
  types: BrandGroup[];
}

export default Product;