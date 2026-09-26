import { redirect } from "next/navigation";

export default function DashboardGroupIndex(): never {
  redirect("/dashboard/analytics");
}
