import { type SchemaTypeDefinition } from 'sanity'
import { comment } from './comment'
import car from './car'
import { userSchema } from './user'
import { productSchema } from './products'
import { orderSchema } from './orders'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [car,comment, userSchema, productSchema,orderSchema],
}
