import "./globals.css";

import { Providers } from "../contexts/theme-providers";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <body
        className={`antialiased dark bg-background`}
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
