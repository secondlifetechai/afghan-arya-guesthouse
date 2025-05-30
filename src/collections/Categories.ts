import { access } from '@/utils/access'
import { CollectionConfig } from 'payload'

export const Categories: CollectionConfig = {
  slug: 'categories',
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
      name: 'type',
      type: 'select',
      options: [
        { label: 'Bedspace', value: 'bedspace' },
        { label: 'Partition', value: 'partition' },
        { label: 'Standard Room', value: 'standard_room' },
        { label: 'Master Room', value: 'master_room' },
      ],
      required: true,
    },
    {
      name: 'defaultPricePerNight',
      type: 'number',
      required: true,
    },
  ],
}
