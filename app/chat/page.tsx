import { redirect } from "next/navigation";

export default function ChatIndex(): never {
  redirect("/chat/room-a");
}
