import { createSchema, type SchemaTypeDefinition } from 'sanity'


import pageInfo from './pageInfo'
import experience from './experience'
import skill from './skill'
import social from './social'
import project from './project'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [pageInfo, experience, skill, social, project],
}
