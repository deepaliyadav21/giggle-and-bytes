import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import { db } from '@/lib/db'; // Import your MySQL pool

export async function POST(req) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Retrieve user from the database
    const selectQuery = `SELECT id, email, password, full_name FROM lets_users WHERE email = ?`;
    const [rows] = await db.execute(selectQuery, [email]);

    if (!rows.length) {
      return NextResponse.json({ error: 'Invalid email or password' }, { status: 401 });
    }

    const user = rows[0];

    // Compare password with the hashed version in the database
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return NextResponse.json({ error: 'Invalid email or password' }, { status: 401 });
    }

    return NextResponse.json({
      message: 'User signed in successfully',
      user: {
        id: user.id,
        email: user.email,
        full_name: user.full_name,
      },
    }, { status: 200 });

  } catch (error) {
    console.error('Sign-in error:', error);
    return NextResponse.json({ error: 'Sign-in failed' }, { status: 500 });
  }
}
