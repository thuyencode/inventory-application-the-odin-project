import { selectCategories, selectCategoryById } from '@/server/db/category'
import { Category } from '@/shared/types'

export async function getCategories(): Promise<Category[]> {
  return selectCategories()
}

export async function getCategoryById(
  id: number
): Promise<Category | undefined> {
  return selectCategoryById(id)
}
