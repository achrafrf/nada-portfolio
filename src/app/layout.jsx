"use client";

import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
// import ErrorReporter from "../components/ErrorReporter"
import Script from "next/script";
import { ThemeProvider } from "next-themes";

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {/* <ErrorReporter /> */}
          {children}
          <VisualEditsMessenger />
        </ThemeProvider>
      </body>
    </html>
  );
}
