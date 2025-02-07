import { type SchemaTypeDefinition } from 'sanity'
import { comment } from './comment'
import car from './car'

import { productSchema } from './products'
import { orderSchema } from './orders'
import userSchema from './user'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [car,comment, userSchema, productSchema,orderSchema],
}
