import fs from "fs/promises";
import path from "path";

export interface Lead {
  id: string;
  name: string;
  email: string;
  createdAt: string;
}

const DATA_DIR = path.join(process.cwd(), "data");
const FILE_PATH = path.join(DATA_DIR, "leads.json");

const INITIAL_LEADS: Lead[] = [
  {
    id: "lead-101",
    name: "Elena Rostova",
    email: "elena.rostova@techcorp.io",
    createdAt: new Date(Date.now() - 86400000 * 2).toISOString(),
  },
  {
    id: "lead-102",
    name: "Marcus Vance",
    email: "marcus.vance@innovate.dev",
    createdAt: new Date(Date.now() - 86400000 * 1).toISOString(),
  },
  {
    id: "lead-103",
    name: "Sofia Patel",
    email: "sofia.patel@cloudscale.net",
    createdAt: new Date(Date.now() - 3600000 * 4).toISOString(),
  },
];

async function ensureFileExists(): Promise<void> {
  try {
    await fs.mkdir(DATA_DIR, { recursive: true });
    await fs.access(FILE_PATH);
  } catch {
    await fs.writeFile(
      FILE_PATH,
      JSON.stringify(INITIAL_LEADS, null, 2),
      "utf-8"
    );
  }
}

/**
 * Direct server fetch helper to get all leads from storage.
 */
export async function getLeads(): Promise<Lead[]> {
  await ensureFileExists();
  try {
    const data = await fs.readFile(FILE_PATH, "utf-8");
    const parsed = JSON.parse(data);
    return Array.isArray(parsed) ? (parsed as Lead[]) : [];
  } catch {
    return [];
  }
}

/**
 * Adds a new lead to storage.
 */
export async function addLead(name: string, email: string): Promise<Lead> {
  await ensureFileExists();
  const leads = await getLeads();
  const newLead: Lead = {
    id: `lead-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
    name,
    email,
    createdAt: new Date().toISOString(),
  };
  leads.unshift(newLead);
  await fs.writeFile(FILE_PATH, JSON.stringify(leads, null, 2), "utf-8");
  return newLead;
}

/**
 * API fetch helper for Route Handlers.
 */
export async function apiGetLeads(): Promise<Lead[]> {
  return await getLeads();
}
