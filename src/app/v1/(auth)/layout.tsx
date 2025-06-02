"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Register", href: "/v1/register" },
  { name: "Login", href: "/v1/login" },
  { name: "Forgot Password", href: "/v1/forgot-password" },
];

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <div>
      <div className="mb-4 p-2">
        {navLinks.map((data) => {
          const isActive = pathname === data.href && data.href !== "/";
          return (
            <Link
              className={
                (isActive ? "font-bold text-blue" : "text-black") +
                " mr-4 p-2 bg-amber-300 hover:bg-amber-500"
              }
              key={data.name}
              href={data.href}
            >
              {data.name}
            </Link>
          );
        })}
      </div>
      {children}
    </div>
  );
}
