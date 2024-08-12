import { Product } from '@/shared/types'

export type DisplayType = 'card' | 'table'

export interface ProductComponentProps {
  display?: DisplayType
  products: Product[]
}
