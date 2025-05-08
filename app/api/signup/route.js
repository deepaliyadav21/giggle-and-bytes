// app/api/user/register/route.js
import { v4 as uuidv4 } from 'uuid';
import mysql from 'mysql2/promise';
import { NextResponse } from 'next/server';
import SendMail from '@/utils/SendMail'; // Assume you have a mail utility

export async function POST(req) {
  try {
    const {
      f_name,
      l_name,
      email,
      password,
      referal,
      myReferal,
      can_earn,
      joined,
      arr,
      mobile
    } = await req.json();

    const fullname = `${f_name} ${l_name}`;
    const email_token = uuidv4();
    const disabled = 1;
    const prvlg_group = 3;
    const randNumber = Math.floor(Math.random() * 100000 + 1);
    const username = `${f_name}-${l_name}=${randNumber}`.toLowerCase();
    const intersted_category = arr.toString();

    const mailBody = {
      to: email,
      from: "no-reply@letsdiskuss.com",
      subject: "Activation Email",
      text: "Please Activate Your Account",
      html: `<center> 
          <img src='https://www.letsdiskuss.com/assets/images/logo.png' width='70'>
          <br><br><hr><br></center> <div style='margin-left:10%;margin-right:10%;color:#000;'>
          <span style='font-size:20px;color:#000;'>Verify your E-mail to finish signing up for Letsdiskuss</span>
          <br><br> Thank you for choosing Letsdiskuss.<br><br> Please confirm that <b>${email}</b> 
          is your e-mail address by clicking on the button below or use this link
          <a href="https://www.letsdiskuss.com/emailVerify/${email_token}">
          https://www.letsdiskuss.com/emailVerify/${email_token}</a><br>
          <a href="https://www.letsdiskuss.com/emailVerify/${email_token}">
          <button style='padding:8px; width:100%; background-color:#22c754; border-radius:4px;margin-top:10px;margin-bottom:15px; border:none;color:#fff; cursor:pointer;'>
          Verify</button></a></div>`,
    };

    // Connect to DB (replace with your credentials)
    const connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'letsdiskuss',
    });

    const insertQuery = `
      INSERT INTO lets_users 
      (f_name, l_name, email, password, by_referal_code, my_referal_code, email_token, prvlg_group, full_name, joined, disabled, username, can_earn, intersted_category, mobile) 
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    await connection.execute(insertQuery, [
      f_name,
      l_name,
      email,
      password,
      referal,
      myReferal,
      email_token,
      prvlg_group,
      fullname,
      joined,
      disabled,
      username,
      can_earn,
      intersted_category,
      mobile,
    ]);

    await SendMail(mailBody); // Adjust path/implementation as needed

    return NextResponse.json({ message: 'User Registered' }, { status: 201 });
  } catch (error) {
    console.error('Registration Error:', error);
    return NextResponse.json({ error: 'Registration Failed' }, { status: 500 });
  }
}
