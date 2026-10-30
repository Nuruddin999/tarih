import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {title: "Исламская хронология — люди и эпохи", description: "Личности исламской истории: годы жизни по хиджре и исторические периоды."};
export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
 return <html lang="ru"><body>{children}</body></html>;
}
