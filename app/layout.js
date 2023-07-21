import "./globals.css";

// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "ISEEA",
  description:
    "ISEEA is a non-profit, youth-centered hub promoting awareness on the importance of self-esteem, self-awareness, and the dangers of low-self-esteem in Nigeria through media, mentorship, partnership, advocacy programs, and impact projects in local communities.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="">
          <main className="flex-grow">{children}</main>
      </body>
    </html>
  );
}
