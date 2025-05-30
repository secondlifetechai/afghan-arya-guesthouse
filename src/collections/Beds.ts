import { access } from '@/utils/access'
import { CollectionConfig } from 'payload'

export const Beds: CollectionConfig = {
  slug: 'beds',
  access: access,
  admin: {
    useAsTitle: 'identityName',
  },
  fields: [
    {
      name: 'identityName',
      type: 'text',
      required: true,
    },
    {
      name: 'pricePerNight',
      type: 'number',
      required: true,
      hooks: {
        beforeChange: [
          async ({ data, originalDoc, req }: any) => {
            if (data?.category) {
              const category = await req.payload.findByID({
                collection: 'categories',
                id: data.category,
              })
              if (category) {
                data.pricePerNight = category.defaultPricePerNight
              }
            }
            return data
          },
        ],
      },
    },
    {
      name: 'apartment',
      type: 'relationship',
      relationTo: 'apartments',
      required: true,
    },
    {
      name: 'category',
      type: 'relationship',
      relationTo: 'categories',
      required: true,
    },
    {
      name: 'status',
      type: 'select',
      options: [
        { label: 'Available', value: 'AVAILABLE' },
        { label: 'Booked', value: 'BOOKED' },
        { label: 'Occupied', value: 'OCCUPIED' },
        { label: 'Maintenance', value: 'MAINTENANCE' },
      ],
      required: true,
    },
  ],
}
