import { Card } from "@/components/card";
import Link from "next/link";

export default function ArchivedNotificationsPage() {
  return (
    <Card>
      <div className="flex flex-col items-center justify-center h-full">
        <h1>Archived Notifications</h1>
        <div>
          <Link href="/complex-dashboard" className="text-blue-500 underline">
            Current Notifications
          </Link>
        </div>
      </div>
    </Card>
  );
}
