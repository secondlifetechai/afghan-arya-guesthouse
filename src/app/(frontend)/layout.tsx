import React from 'react'
import './styles.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  description: 'Afghan Arya Guesthouse',
  title: 'The Best Holiday Homes in Afghanistan',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
