"use server";

import { addLead } from "@/lib/db";
import { revalidatePath } from "next/cache";

export interface LeadActionState {
  success: boolean;
  message?: string;
  errors?: {
    name?: string;
    email?: string;
  };
}

/**
 * Server Action for creating a lead.
 * Simulates a 1-second delay and revalidates the /leads route cache.
 */
export async function createLeadAction(
  prevState: LeadActionState,
  formData: FormData
): Promise<LeadActionState> {
  const name = formData.get("name")?.toString().trim();
  const email = formData.get("email")?.toString().trim();

  const errors: { name?: string; email?: string } = {};

  if (!name || name.length < 2) {
    errors.name = "Please enter a valid name (at least 2 characters).";
  }

  if (!email || !email.includes("@") || !email.includes(".")) {
    errors.email = "Please enter a valid email address.";
  }

  if (Object.keys(errors).length > 0) {
    return {
      success: false,
      errors,
    };
  }

  // Simulate a 1-second network/DB delay as requested
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Write lead to storage
  await addLead(name!, email!);

  // Purge server cache for /leads so the Server Component reflects the new data
  revalidatePath("/leads");

  return {
    success: true,
    message: `Lead "${name}" added successfully! Cache for /leads revalidated.`,
  };
}
