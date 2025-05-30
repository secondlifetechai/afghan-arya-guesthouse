// storage-adapter-import-placeholder
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import brevoAdapter from './utils/brevoAdapter'
import { Branches } from './collections/Branches'
import { Apartments } from './collections/Apartments'
import { Categories } from './collections/Categories'
import { Staff } from './collections/Staff'
import { Settings } from './collections/Settings'
import { Customers } from './collections/Customers'
import { Beds } from './collections/Beds'
import { Bookings } from './collections/Bookings'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  email: brevoAdapter(),
  collections: [
    Users,
    Media,
    Staff,
    Branches,
    Apartments,
    Categories,
    Beds,
    Bookings,
    Customers,
    Settings,
  ],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
  }),
  sharp,
  plugins: [
    payloadCloudPlugin(),
    // storage-adapter-placeholder
  ],
})
