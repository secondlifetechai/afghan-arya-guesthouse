import React from 'react'
import './styles.css'
import { Inter } from 'next/font/google'
import { AuthProvider } from '@/lib/auth-context'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  description: 'Afghan Arya Guesthouse',
  title: 'The Best Holiday Homes in Afghanistan',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  )
}
