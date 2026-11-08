import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://islamtarih.ru"),
  title: "Исламская хронология — люди и эпохи",
  description: "Наглядный путеводитель по исламской истории: пророк Мухаммад, его сподвижники, учёные и правители. Годы жизни, исторические эпохи и современники.",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
 return <html lang="ru"><body>{children}</body></html>;
}
