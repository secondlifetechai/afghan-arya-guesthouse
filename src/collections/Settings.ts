import { access } from '@/utils/access'
import { CollectionConfig } from 'payload'

export const Settings: CollectionConfig = {
  slug: 'settings',
  access: access,
  admin: {
    useAsTitle: 'businessName',
  },
  fields: [
    {
      name: 'businessName',
      type: 'text',
      required: true,
    },
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'checkInTime',
      type: 'text',
    },
    {
      name: 'checkOutTime',
      type: 'text',
    },
    {
      name: 'rules',
      type: 'textarea',
    },
  ],
}
