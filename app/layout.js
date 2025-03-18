import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata = {
  //Nom onglet du site nextjs et description helps for SEO
  title: "DevFlow",
  description:
    "A platform for programming questions and answers. Get help, share your knowledge and collaboratewith developpers around the world.",
  icons: {
    icon: "/images/site-logo.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* .className = default font of the application / .variable= pour l'utiliser ou on veut avec font-nomImportduFont */}
      <body
        className={`${inter.className} ${spaceGrotesk.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
