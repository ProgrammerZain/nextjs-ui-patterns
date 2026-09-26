import { redirect } from "next/navigation";

export default function PatientsIndex(): never {
  redirect("/patients/1");
}
