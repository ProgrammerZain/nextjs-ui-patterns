import { redirect } from "next/navigation";

export default function AnalyticsIndex(): never {
  redirect("/analytics/reports");
}
