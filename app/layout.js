"use client"
import "./globals.css";
import { QueryClient, QueryClientProvider } from 'react-query';

export const metadata = {
  title: "ISEEA Admin Dashboard",
  description:
    "Discover the ISEEA Admin Site - powered by Next.js, Axios, and Tailwind CSS. Seamlessly manage projects, impacts, reports, and team members through its intuitive interface. Connects to a robust backend built with Node.js, Express, and MongoDB.",
};

export default function RootLayout({ children }) {
  const queryClient = new QueryClient();

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="">
      <QueryClientProvider client={queryClient}>
      <main className="flex-grow">{children}</main>
      </QueryClientProvider>
         
      </body>
    </html>
  );
}
