import { NextResponse } from "next/server";
import { apiGetLeads } from "@/lib/db";

/**
 * REST Route Handler for retrieving leads.
 * Exposes a standard HTTP GET endpoint returning JSON.
 */
export async function GET(): Promise<NextResponse> {
  try {
    const leads = await apiGetLeads();
    return NextResponse.json({
      success: true,
      data: leads,
      count: leads.length,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: "Failed to retrieve leads",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
