import { CollectionConfig } from 'payload'

const Rooms: CollectionConfig = {
  slug: 'rooms',
  admin: {
    useAsTitle: 'roomType',
  },
  access: {
    read: () => true,
    create: ({ req: { user } }) => user?.role === 'admin',
    update: ({ req: { user } }) => user?.role === 'admin',
    delete: ({ req: { user } }) => user?.role === 'admin',
  },
  fields: [
    {
      name: 'hostel',
      type: 'relationship',
      relationTo: 'hostels',
      required: true,
    },
    {
      name: 'roomType',
      type: 'select',
      options: [
        'Dormitory Room for Men',
        'Dormitory Room for Women',
        'Private Room With Two King Size Bed',
        'Private Room With One King Size Bed',
        'VIP Studio',
      ],
      required: true,
    },
    {
      name: 'pricePerNight',
      type: 'number',
      required: true,
    },
    {
      name: 'amenities',
      type: 'array',
      fields: [
        {
          name: 'item',
          type: 'text',
        },
      ],
    },
    {
      name: 'images',
      type: 'array',
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
        },
      ],
    },
    {
      name: 'isAvailable',
      type: 'checkbox',
      defaultValue: true,
    },
  ],
}
export default Rooms
