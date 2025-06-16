export interface User {
  id: string
  email: string
  role: 'admin' | 'staff'
  firstName: string
  lastName: string
}
