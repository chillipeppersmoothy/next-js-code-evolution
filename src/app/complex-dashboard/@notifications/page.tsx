import { Card } from "@/components/card";
import Link from "next/link";

export default function NotificationsPage() {
  return (
    <Card>
      <div className="flex flex-col items-center justify-center h-full">
        <h1>Notifications section</h1>
        <div>
          <Link
            href="/complex-dashboard/archived"
            className="text-blue-500 underline"
          >
            Archived Notifications
          </Link>
        </div>
      </div>
    </Card>
  );
}
