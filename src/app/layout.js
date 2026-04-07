"use client";

import "./globals.css";
import { useEffect } from "react";
import { destroyLenis } from "@/lib/lenis-config";
import { ScrollTrigger } from "@/lib/gsap-config";

export default function RootLayout({ children }) {
  useEffect(() => {
    ScrollTrigger.refresh();
    return destroyLenis;
  }, []);

  return (
    <html lang="en">
      <body className="min-h-[500vh] bg-void text-chrome antialiased">
        {children}
      </body>
    </html>
  );
}
