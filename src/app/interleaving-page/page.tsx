import ClientComponentOne from "@/components/clientComponentOne";
import ServerComponentOne from "@/components/serverComponentOne";

export default async function InterLeavingPage() {
  return (
    <div>
      <h1>InterLeaving Page</h1>
      <ClientComponentOne>
        <ServerComponentOne />
      </ClientComponentOne>
    </div>
  );
}
