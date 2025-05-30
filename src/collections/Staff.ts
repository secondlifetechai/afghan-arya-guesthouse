import { access } from '@/utils/access'
import { CollectionConfig } from 'payload'

export const Staff: CollectionConfig = {
  slug: 'staff',
  access: access,
  auth: true,
  admin: {
    useAsTitle: 'email',
  },
  fields: [
    {
      name: 'type',
      type: 'select',
      options: [
        { label: 'Admin', value: 'admin' },
        { label: 'Staff', value: 'staff' },
      ],
      required: true,
    },
    {
      name: 'firstName',
      type: 'text',
      required: true,
    },
    {
      name: 'lastName',
      type: 'text',
      required: true,
    },
    {
      name: 'phoneNumber',
      type: 'text',
    },
    {
      name: 'address',
      type: 'text',
    },
    {
      name: 'branch',
      type: 'relationship',
      relationTo: 'branches',
    },
  ],
}
