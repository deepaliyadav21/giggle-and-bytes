// lib/SendMail.js
import { transporter, sender } from "@/utils/nodemailerConfig";

export default async function SendMail(mailBody) {
  try {
    await transporter.sendMail({
      from: `"${sender.name}" <${sender.email}>`,
      to: mailBody.to,
      subject: mailBody.subject,
      text: mailBody.text,
      html: mailBody.html,
    });
    console.log("Email sent to:", mailBody.to);
  } catch (error) {
    console.error("Failed to send email:", error);
    throw error; // Re-throw to be caught in your API route
  }
}
