import { access } from '@/utils/access'
import { CollectionConfig } from 'payload'

export const Apartments: CollectionConfig = {
  slug: 'apartments',
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
      name: 'aptNo',
      type: 'text',
      required: true,
    },
    {
      name: 'branch',
      type: 'relationship',
      relationTo: 'branches',
      required: true,
    },
  ],
}
