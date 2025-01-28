import { type SchemaTypeDefinition } from 'sanity'
import { comment } from './comment'
import car from './car'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [car,comment],
}
