const isAdmin = ({ req: { user } }: any) => user && user.collection === 'users'

const isStaff = ({ req: { user } }: any) => user && user.collection === 'staff'

export const access = {
  create: isAdmin,
  read: ({ req: { user } }: any) => isAdmin({ req: { user } }) || isStaff({ req: { user } }),
  update: isAdmin,
  delete: isAdmin,
}
