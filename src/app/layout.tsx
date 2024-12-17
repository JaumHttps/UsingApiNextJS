import "./globals.css";

import { Providers } from "../contexts/theme-providers";
import { Toaster } from "@/components/ui/toaster"
import { UserProvider } from "@/contexts/context-user";

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
          <UserProvider>
            {children}
            <Toaster />
          </UserProvider>
        </Providers>
      </body>
    </html>
  );
}
