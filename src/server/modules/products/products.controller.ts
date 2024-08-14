import { NotFound } from '@/server/errors'
import BadRequest from '@/server/errors/BadRequest'
import { isEmpty } from '@/server/utils'
import { SelectProductsDefaultLimitSchema } from '@/shared/schemas/select-products.schema'
import { Product } from '@/shared/types'
import type e from 'express'
import expressAsyncHandler from 'express-async-handler'
import * as v from 'valibot'
import { getPagesCount, getProductById, getProducts } from './products.service'

export const handleProductsApi = expressAsyncHandler(
  async (req: e.Request, res: e.Response) => {
    try {
      let products: Product[]
      let pages_count: number | undefined
      let next: string | undefined

      if (isEmpty(req.query)) {
        products = await getProducts()
      } else {
        const options = v.parse(SelectProductsDefaultLimitSchema, {
          ...req.query,
          page: req.query.page ? Number(req.query.page) : undefined
        })

        pages_count = await getPagesCount()

        if (options.page !== undefined && options.page < pages_count) {
          next = `${req.baseUrl}?page=${options.page + 1}`
        }

        products = await getProducts(options)
      }

      res.send({ products, pages_count, next })
    } catch (error) {
      if (v.isValiError(error)) {
        const issues = v.flatten(error.issues).nested

        throw new BadRequest(issues)
      }
    }
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
