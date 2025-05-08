import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
    host: 'smtp.zoho.com',
    secure: true,
    port: 465, // true for 465, false for other ports
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

export const sender = {
    email: process.env.EMAIL_USER,
    name: "Letsdiskuss",
};