import fs from "fs";

export default async function ServerComponentTwo() {
  fs.readFileSync("src/components/serverComponentTwo.tsx", "utf-8");

  return <h1>Server Component Two</h1>;
}
