import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  weight: ['400', '500', '700', '900'],
  subsets: ["latin"],
  variable: "--font-roboto",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "MBL Ceará | Movimento Brasil Livre",
  description: "Site oficial do Movimento Brasil Livre Ceará. Lutamos por um Brasil mais livre, justo e próspero.",
  keywords: "MBL, Movimento Brasil Livre, Ceará, política, liberdade, transparência",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <meta name="apple-mobile-web-app-title" content="MBLCE" />
      <body className={`${roboto.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
