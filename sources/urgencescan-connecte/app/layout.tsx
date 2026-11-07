import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "UrgenceScan — La trousse prête. L’esprit libre.",
  description: "Inventaire partagé et suivi des péremptions de la trousse d’urgence.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="antialiased">{children}</body>
    </html>
  );
}
