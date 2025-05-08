import { db } from '@/lib/db';

export async function GET() {
  try {
    const [rows] = await db.query('SELECT COUNT(*) AS count FROM lets_users');
    return Response.json({ message: 'Connected successfully!', userCount: rows[0].count });
  } catch (error) {
    return Response.json({ error: 'DB connection failed', details: error.message }, { status: 500 });
  }
}
