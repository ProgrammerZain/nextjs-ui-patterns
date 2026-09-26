import { redirect } from "next/navigation";

export default function AccountsIndex(): never {
  redirect("/accounts/personal");
}
