/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState } from "react";

export default function ClientComponentTwo() {
  const [state, setState] = useState("Superman");

  return <h1>Client Component Two</h1>;
}
