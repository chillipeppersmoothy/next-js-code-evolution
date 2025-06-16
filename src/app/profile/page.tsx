"use client";

import { use } from "react";

export default function Profile({
  searchParams,
}: {
  searchParams: Promise<{ id?: string }>;
}) {
  const { id } = use(searchParams);
  return <h1>Profile {id}</h1>;
}
