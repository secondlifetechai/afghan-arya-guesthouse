import { CollectionConfig } from 'payload'
import { createHash } from 'crypto'

const Staff: CollectionConfig = {
  slug: 'staff',
  auth: true,
  admin: {
    useAsTitle: 'email',
  },
  access: {
    read: ({ req: { user } }) => !!user,
    create: ({ req: { user } }) => user?.role === 'admin',
    update: ({ req: { user } }) => user?.role === 'admin',
    delete: ({ req: { user } }) => user?.role === 'admin',
  },
  fields: [
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
      name: 'role',
      type: 'select',
      options: ['admin', 'staff'],
      required: true,
      defaultValue: 'staff',
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'hostel',
      type: 'relationship',
      relationTo: 'hostels',
      hasMany: true,
      required: true,
    },
  ],
}
export default Staff
