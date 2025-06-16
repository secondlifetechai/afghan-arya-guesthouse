import { CollectionConfig } from 'payload'

const Bookings: CollectionConfig = {
  slug: 'bookings',
  admin: {
    useAsTitle: 'status',
  },
  access: {
    read: ({ req: { user } }) => !!user,
    create: ({ req: { user } }) => (user ? ['admin', 'staff'].includes(user?.role) : false),
    update: ({ req: { user } }) => (user ? ['admin', 'staff'].includes(user?.role) : false),
    delete: ({ req: { user } }) => user?.role === 'admin',
  },
  fields: [
    {
      name: 'staff',
      type: 'relationship',
      relationTo: 'staff',
      required: true,
    },
    {
      name: 'room',
      type: 'relationship',
      relationTo: 'rooms',
      required: true,
    },
    {
      name: 'hostel',
      type: 'relationship',
      relationTo: 'hostels',
      required: true,
    },
    {
      name: 'checkInDate',
      type: 'date',
      required: true,
    },
    {
      name: 'checkOutDate',
      type: 'date',
      required: true,
    },
    {
      name: 'totalPrice',
      type: 'number',
      required: true,
    },
    {
      name: 'amountPaid',
      type: 'number',
      required: true,
    },
    {
      name: 'bookingFrom',
      type: 'select',
      options: ['booking.com', 'hostelWorld', 'Agoda', 'walk in'],
      required: true,
    },
    {
      name: 'paymentMethod',
      type: 'select',
      options: ['cash', 'card', 'online'],
      required: true,
    },
    {
      name: 'isPaid',
      type: 'checkbox',
      defaultValue: false,
    },
    {
      name: 'status',
      type: 'select',
      options: ['pending', 'confirmed', 'cancelled'],
      defaultValue: 'pending',
      required: true,
    },
    {
      name: 'guests',
      type: 'relationship',
      relationTo: 'guests',
      hasMany: true,
      required: true,
    },
  ],
}
export default Bookings
