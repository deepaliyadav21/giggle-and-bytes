import Navbar from "@/components/Navbar/Navbar.component";
import Footer from "@/components/Footer/Footer.component";
import "./globals.css";

export const metadata = {
  title: "Let's Diskuss - Join the Conversation",
  description: "Join the conversation, share your thoughts, and connect with a community of thinkers and writers on Let's Diskuss.",
  keywords: "discussion, blog, community, writing, thoughts, conversation",
  authors: [{ name: "Let's Diskuss Team" }],
  openGraph: {
    title: "Let's Diskuss - Join the Conversation",
    description: "Join the conversation, share your thoughts, and connect with a community of thinkers and writers.",
    url: "https://www.letsdiskuss.com",
    siteName: "Let's Diskuss",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Let's Diskuss - Join the Conversation",
    description: "Join the conversation, share your thoughts, and connect with a community of thinkers and writers.",
    creator: "@Letsdiskuss",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/logo/favicon/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo/favicon/apple-icon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#20565c" />
      </head>
      <body className="antialiased">
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}