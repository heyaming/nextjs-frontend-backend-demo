import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ 
    message: 'Hello from the backend!', 
    timestamp: new Date().toISOString() 
  });
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  return NextResponse.json({ 
    received: body, 
    response: `Backend processed: ${body.message}`,
    timestamp: new Date().toISOString()
  });
}