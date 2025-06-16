import { CollectionConfig } from 'payload'

const Guests: CollectionConfig = {
  slug: 'guests',
  admin: {
    useAsTitle: 'firstName',
  },
  access: {
    read: ({ req: { user } }) => !!user,
    create: ({ req: { user } }) => (user ? ['admin', 'staff'].includes(user?.role) : false),
    update: ({ req: { user } }) => (user ? ['admin', 'staff'].includes(user?.role) : false),
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
      name: 'phoneNumber',
      type: 'text',
      required: true,
    },
    {
      name: 'email',
      type: 'email',
      required: false,
    },
    {
      name: 'passportPhoto',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
  ],
}
export default Guests
