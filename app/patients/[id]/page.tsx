import React from "react";
import Link from "next/link";

interface PatientInfo {
  id: string;
  name: string;
  age: number;
  gender: string;
  bloodGroup: string;
  lastVisit: string;
  primaryCondition: string;
  allergies: string[];
}

const mockPatients: Record<string, PatientInfo> = {
  "1": {
    id: "1",
    name: "John Doe",
    age: 45,
    gender: "Male",
    bloodGroup: "A+",
    lastVisit: "Sep 12, 2026",
    primaryCondition: "Hypertension Monitoring",
    allergies: ["Penicillin", "Peanuts"],
  },
  "2": {
    id: "2",
    name: "Jane Smith",
    age: 38,
    gender: "Female",
    bloodGroup: "O-",
    lastVisit: "Sep 20, 2026",
    primaryCondition: "Annual Physical Exam",
    allergies: ["Latex"],
  },
};

interface PatientPageProps {
  params: Promise<{ id: string }>;
}

export default async function PatientRecordPage({
  params,
}: PatientPageProps): Promise<React.JSX.Element> {
  const { id } = await params;
  const patient = mockPatients[id] || {
    id,
    name: `Patient ${id}`,
    age: 30,
    gender: "Unspecified",
    bloodGroup: "Unknown",
    lastVisit: "N/A",
    primaryCondition: "Routine Observation",
    allergies: ["None Listed"],
  };

  const nextPatientId = id === "1" ? "2" : "1";
  const nextPatientName = id === "1" ? "Jane Smith" : "John Doe";

  return (
    <div className="space-y-6">
      <div className="p-6 rounded-xl border border-slate-800 bg-slate-900/40 space-y-4">
        <div className="flex items-center justify-between">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-rose-950 text-rose-400 text-xs font-mono font-medium border border-rose-800/50">
            Route: /patients/{id}
          </div>
          <span className="text-xs text-slate-500">Record #{id}</span>
        </div>

        <div>
          <h1 className="text-2xl font-bold text-slate-100">
            Viewing Medical Record for Patient {id} ({patient.name})
          </h1>
          <p className="text-slate-400 text-sm mt-1 leading-relaxed max-w-xl">
            Type notes into the Quick Notes draft box above. Then click below to switch to Patient {nextPatientId} &mdash; the notes will be completely blanked out automatically because `template.tsx` remounts and destroys the previous state.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 pt-2">
          <div className="p-4 rounded-lg bg-slate-950 border border-slate-800 space-y-1">
            <div className="text-xs text-slate-500">Patient Name</div>
            <div className="font-semibold text-slate-200">{patient.name}</div>
          </div>
          <div className="p-4 rounded-lg bg-slate-950 border border-slate-800 space-y-1">
            <div className="text-xs text-slate-500">Age &amp; Gender</div>
            <div className="font-semibold text-slate-200">
              {patient.age} yrs &bull; {patient.gender}
            </div>
          </div>
          <div className="p-4 rounded-lg bg-slate-950 border border-slate-800 space-y-1">
            <div className="text-xs text-slate-500">Blood Group</div>
            <div className="font-semibold text-rose-400 font-mono">
              {patient.bloodGroup}
            </div>
          </div>
          <div className="p-4 rounded-lg bg-slate-950 border border-slate-800 space-y-1">
            <div className="text-xs text-slate-500">Last Visit</div>
            <div className="font-semibold text-slate-200">{patient.lastVisit}</div>
          </div>
        </div>

        <div className="p-4 rounded-lg bg-slate-950 border border-slate-800 space-y-2">
          <div className="text-xs font-semibold text-slate-400">
            Primary Diagnosis &amp; Known Allergies
          </div>
          <div className="text-sm text-slate-200">
            <span className="font-medium text-slate-100">
              {patient.primaryCondition}
            </span>
          </div>
          <div className="flex items-center gap-2 text-xs pt-1">
            <span className="text-slate-500">Allergies:</span>
            {patient.allergies.map((allergy) => (
              <span
                key={allergy}
                className="px-2 py-0.5 rounded bg-rose-950/60 text-rose-300 border border-rose-800/40 font-mono text-[11px]"
              >
                {allergy}
              </span>
            ))}
          </div>
        </div>

        <div className="pt-2">
          <Link
            href={`/patients/${nextPatientId}`}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-rose-500 hover:bg-rose-400 text-slate-950 font-bold text-sm transition-colors"
          >
            Switch to Patient {nextPatientId} ({nextPatientName}) &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
