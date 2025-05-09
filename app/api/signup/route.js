import { v4 as uuidv4 } from 'uuid';
import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import SendMail from '@/utils/SendMail'; // Optional
import { db } from '@/lib/db'; // Import your MySQL pool

export async function POST(req) {
  try {
    const { f_name, l_name, email, password } = await req.json();

    if (!f_name || !l_name || !email || !password) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Check if email already exists
    const checkEmailQuery = `SELECT email FROM lets_users WHERE email = ?`;
    const [existingUser] = await db.execute(checkEmailQuery, [email]);

    if (existingUser.length > 0) {
      return NextResponse.json({ error: 'Email is already registered' }, { status: 409 });
    }


    const hashedPassword = await bcrypt.hash(password, 10);
    const full_name = `${f_name} ${l_name}`;
    const email_token = uuidv4();
    const username = `${f_name}-${l_name}-${Math.floor(Math.random() * 100000)}`.toLowerCase();

    // Optional: email verification
    const mailBody = {
      to: email,
      from: "no-reply@letsdiskuss.com",
      subject: "Activate Your Letsdiskuss Account",
      html: `
        <p>Hello ${full_name},</p>
        <p>Please verify your email by clicking the link below:</p>
        <a href="https://www.letsdiskuss.com/emailVerify/${email_token}">
          Verify Email
        </a>
      `,
    };

    const insertQuery = `
      INSERT INTO lets_users 
      (f_name, l_name, email, password, full_name, email_token, username) 
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `;

    await db.execute(insertQuery, [
      f_name,
      l_name,
      email,
      hashedPassword,
      full_name,
      email_token,
      username,
    ]);

    // Optional: send verification mail
    await SendMail(mailBody);

    return NextResponse.json({ message: 'User registered successfully' }, { status: 201 });
  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json({ error: 'Registration failed' }, { status: 500 });
  }
}
