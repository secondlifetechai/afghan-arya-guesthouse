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

export const Bookings: CollectionConfig = {
  slug: 'bookings',
  access: access,
  admin: {
    useAsTitle: 'bookingRef',
  },
  fields: [
    {
      name: 'bookingRef',
      type: 'text',
      required: true,
    },
    {
      name: 'customer',
      type: 'relationship',
      relationTo: 'customers',
      required: true,
    },
    {
      name: 'checkIn',
      type: 'date',
      required: true,
    },
    {
      name: 'checkOut',
      type: 'date',
      required: true,
    },
    {
      name: 'staff',
      type: 'relationship',
      relationTo: 'staff',
    },
    {
      name: 'bed',
      type: 'relationship',
      relationTo: 'beds',
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
      options: [
        { label: 'Booking.com', value: 'booking_com' },
        { label: 'HostelWorld', value: 'hostelworld' },
        { label: 'Agoda', value: 'agoda' },
        { label: 'Walk In', value: 'walk_in' },
      ],
      required: true,
    },
    {
      name: 'modeOfPayment',
      type: 'select',
      options: [
        { label: 'Cash', value: 'cash' },
        { label: 'Card', value: 'card' },
        { label: 'Online', value: 'online' },
      ],
      required: true,
    },
  ],
}
