import { initPayload } from '@/lib/payload'
import { NextRequest, NextResponse } from 'next/server'
import payload from 'payload'

export async function POST(req: NextRequest) {
  const body = await req.json()
  const { email, password } = body

  try {
    const user = await payload.login({ collection: 'staff', data: { email, password } })
    return NextResponse.json({ user })
  } catch (err) {
    return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 })
  }
}
