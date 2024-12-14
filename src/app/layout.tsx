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
          <header className="flex justify-between p-2 bg-secondary">
            <p>NextJS</p>
            <div className="flex gap-4">
              <Link className="hover:border-b border-primary" href="/">
                Home
              </Link>
              <Link className="hover:border-b border-primary" href="#">
                About
              </Link>
              <Link className="hover:border-b border-primary" href="#">
                Contact
              </Link>
            </div>
            <Avatar className="w-8 h-8">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </header>
          {children}
        </Providers>
      </body>
    </html>
  );
}
