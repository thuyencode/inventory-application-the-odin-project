export interface Category {
  id: number
  create_time: Date
  name: string
}

export type Product = {
  description?: string
  price: number
  stock: number
  brand?: string
  sku: string
  weight: number
  category_id: number
  image_url: string
  category_name: string
} & Category
