import { db } from '@/lib/db';
import { NextResponse } from 'next/server';


export async function POST(req) {
  try {
    const { email, password } = await req.json();

    // Query user by email
    const [rows] = await db.query('SELECT * FROM lets_users WHERE email = ?', [email]);

    if (rows.length === 0) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    const user = rows[0];

    // Compare plaintext password (or hash match in real app)
    if (user.password !== password) {
      return NextResponse.json({ error: 'Invalid password' }, { status: 401 });
    }

    return NextResponse.json({
      message: 'Login successful',
      user: {
        uid: user.uid,
        email: user.email,
        full_name: user.full_name,
      },
    });
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
