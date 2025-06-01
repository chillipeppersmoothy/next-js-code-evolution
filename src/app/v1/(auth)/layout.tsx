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
      <div>
        {navLinks.map((data) => {
          const isActive = pathname === data.href && data.href !== "/";
          return (
            <Link
              style={{
                color: `${isActive ? "red" : "black"}`,
                marginRight: "15px",
              }}
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
