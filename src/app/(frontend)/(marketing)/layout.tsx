import Footer from '@/components/marketing/Footer'
import Header from '@/components/marketing/Header'
import React from 'react'

export default async function MarketingLayout(props: { children: React.ReactNode }) {
  const { children } = props
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}
