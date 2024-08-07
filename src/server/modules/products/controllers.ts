import { NotFound } from '@/server/errors'
import BadRequest from '@/server/errors/BadRequest'
import { Product } from '@/shared/types'
import type e from 'express'
import expressAsyncHandler from 'express-async-handler'
import {
  getAllProducts,
  getPagesCount,
  getProductById,
  getProductsPagination
} from './services'

export const handleProductsApi = expressAsyncHandler(
  async (req: e.Request, res: e.Response) => {
    let products: Product[]
    let next: string | undefined

    const queryString = req.query.page

    const pages_count = await getPagesCount()

    if (queryString === undefined) {
      products = await getAllProducts()
    } else {
      const page = Number(queryString)

      if (!Number.isInteger(page)) {
        throw new BadRequest(
          "The value provided to 'page' must be an integer number"
        )
      }

      if (page > pages_count || page < 1) {
        throw new NotFound()
      }

      if (page < pages_count) {
        next = `${req.baseUrl}?page=${page + 1}`
      }

      products = await getProductsPagination(page)
    }

    res.send({ products, pages_count, next })
  }
)

export const handleProductByIdApi = expressAsyncHandler(
  async (req: e.Request, res: e.Response) => {
    const id = Number(req.params.id)

    if (!Number.isInteger(id)) {
      throw new BadRequest('The given id must be an integer number')
    }

    const product = await getProductById(id)

    if (product === undefined) {
      throw new NotFound()
    }

    res.send(product)
  }
)
