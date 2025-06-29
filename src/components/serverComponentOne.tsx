import fs from "fs";
import ServerComponentTwo from "./serverComponentTwo";

export default async function ServerComponentOne() {
  fs.readFileSync("src/components/serverComponentOne.tsx", "utf-8");

  return (
    <div>
      <h1>Server Component One</h1>
      <ServerComponentTwo />
    </div>
  );
}
