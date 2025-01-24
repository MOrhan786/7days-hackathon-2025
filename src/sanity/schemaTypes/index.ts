import { type SchemaTypeDefinition } from 'sanity'
import car from './car'
import { comment } from './comment'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [car,comment],
}
