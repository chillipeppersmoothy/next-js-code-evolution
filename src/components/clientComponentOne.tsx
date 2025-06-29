/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState } from "react";
import ClientComponentTwo from "./clientComponentTwo";

export default function ClientComponentOne({
  children,
}: {
  children: React.ReactNode;
}) {
  const [state, setState] = useState("Batman");

  return (
    <div>
      <h1>Client Component One</h1>
      <ClientComponentTwo />
      {children}
    </div>
  );
}
