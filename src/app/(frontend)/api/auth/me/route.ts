import { NextRequest, NextResponse } from 'next/server'
import { initPayload } from '@/lib/payload'

export async function GET(req: any) {
  const { user } = req

  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  return NextResponse.json({ user })
}
