import { Card } from "@/components/card";

export default async function UserAnalyticsPage() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return (
    <Card>
      <h1>User Analytics</h1>
    </Card>
  );
}
