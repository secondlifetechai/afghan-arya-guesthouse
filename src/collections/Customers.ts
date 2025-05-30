import { CollectionConfig } from 'payload'

const access = {
  create: ({ req: { user } }: any) =>
    user && (user.collection === 'users' || user.collection === 'staff'),
  read: ({ req: { user } }: any) =>
    user && (user.collection === 'users' || user.collection === 'staff'),
  update: ({ req: { user } }: any) =>
    user && (user.collection === 'users' || user.collection === 'staff'),
  delete: ({ req: { user } }: any) =>
    user && (user.collection === 'users' || user.collection === 'staff'),
}

export const Customers: CollectionConfig = {
  slug: 'customers',
  access: access,
  admin: {
    useAsTitle: 'firstName',
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
      name: 'phoneNumber',
      type: 'text',
      required: true,
    },
    {
      name: 'email',
      type: 'email',
    },
    {
      name: 'passportPhoto',
      type: 'upload',
      relationTo: 'media',
    },
  ],
}
