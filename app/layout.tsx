import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nardonia Styles | Luxury Hair, Beautifully You",
  description: "Luxury hairstyling, protective styles, and custom looks. Explore the work, discover your next style, and request an appointment with Nardonia Styles.",
  applicationName: "Nardonia Styles"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
