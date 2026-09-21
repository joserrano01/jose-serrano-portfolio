import type { Metadata } from "next";
import PharmacySystemDemo from "@/components/PharmacySystemDemo";

export const metadata: Metadata = {
  title: "Pharmaceutical Prescription Workflow Demo | José Serrano",
  description:
    "Interactive, anonymized demonstration of an AI-assisted pharmaceutical prescription review workflow with mandatory human validation.",
};

export default function PharmacySystemPage() {
  return <PharmacySystemDemo />;
}
