import { access } from '@/utils/access'
import { CollectionConfig } from 'payload'

export const Branches: CollectionConfig = {
  slug: 'branches',
  access: access,
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'country',
      type: 'text',
      required: true,
    },
    {
      name: 'city',
      type: 'text',
      required: true,
    },
    {
      name: 'town',
      type: 'text',
    },
    {
      name: 'address',
      type: 'text',
    },
  ],
}
