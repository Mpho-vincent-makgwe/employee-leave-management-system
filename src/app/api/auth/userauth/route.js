import { verifyUser } from '@/utils/apiHelpers';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { email, password } = await request.json();
    
    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email and password are required' },
        { status: 400 }
      );
    }

    const user = verifyUser(email, password);
    
    if (!user) {
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      );
    }

    // Set HTTP-only secure cookie
    const response = NextResponse.json({ 
      success: true,
      user: { 
        id: user.id,
        email: user.email,
        name: user.name 
        // Include only non-sensitive data
      }
    });

    response.cookies.set('auth-token', JSON.stringify(user), {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 60 * 60 * 24 * 7, // 1 week
      path: '/',
    });

    return response;

  } catch (error) {
    console.error('Auth error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET(request) {
  const token = request.cookies.get('auth-token')?.value;

  if (!token) {
    return NextResponse.json({ user: null });
  }

  try {
    const user = JSON.parse(token);
    return NextResponse.json({ 
      user: {
        id: user.id,
        email: user.email,
        name: user.name
        // Return only non-sensitive data
      }
    });
  } catch (error) {
    return NextResponse.json({ user: null });
  }
}