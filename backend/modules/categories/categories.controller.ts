import { NotFound } from '@backend/errors'
import BadRequest from '@backend/errors/BadRequest'
import type e from 'express'
import expressAsyncHandler from 'express-async-handler'
import { getAllCategories, getCategoryById } from './categories.service'

export const handleCategoriesApi = expressAsyncHandler(
  async (req: e.Request, res: e.Response) => {
    const categories = await getAllCategories()

    res.send({ categories })
  }
)

export const handleCategoryByIdApi = expressAsyncHandler(
  async (req: e.Request, res: e.Response) => {
    const id = Number(req.params.id)

    if (!Number.isInteger(id)) {
      throw new BadRequest('The given id must be an integer number')
    }

    const category = await getCategoryById(id)

    if (category === undefined) {
      throw new NotFound()
    }

    res.send(category)
  }
)
