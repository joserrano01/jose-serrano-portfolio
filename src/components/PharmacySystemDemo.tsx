"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { useLang } from "@/context/LangContext";
import type { Lang } from "@/lib/translations";
import styles from "./PharmacySystemDemo.module.css";

type Stage = "select" | "review" | "labels";
type Confidence = "high" | "medium" | "low";

interface Medication {
  id: string;
  name: string;
  quantity: string;
  dosage: string;
  labelCount: number;
  confidence: Confidence;
  needsReview: boolean;
  suggestions: string[];
}

interface DemoPrescription {
  id: string;
  patientName: string;
  patientId: string;
  birthDate: string;
  clinicName: string;
  doctorName: string;
  doctorRegistration: string;
  prescriptionDate: string;
  pharmacyName: string;
  staffName: string;
  staffId: string;
  documentLines: string[];
  medications: Medication[];
}

interface Scenario {
  id: string;
  tone: Confidence;
  title: Record<Lang, string>;
  description: Record<Lang, string>;
  prescription: Record<Lang, DemoPrescription>;
}

const sharedPrescriptionEn = {
  patientName: "Demo Patient 01",
  patientId: "ID-SYN-1001",
  birthDate: "1988-04-12",
  clinicName: "Central Model Clinic",
  doctorName: "Dr. Elena Sample",
  doctorRegistration: "REG-DEMO-2048",
  prescriptionDate: "2026-09-18",
  pharmacyName: "Demonstration Pharmacy",
  staffName: "Demo User",
  staffId: "USR-001",
};

const sharedPrescriptionEs = {
  patientName: "Paciente Demo 01",
  patientId: "ID-SYN-1001",
  birthDate: "1988-04-12",
  clinicName: "Clínica Modelo Central",
  doctorName: "Dra. Elena Ejemplo",
  doctorRegistration: "REG-DEMO-2048",
  prescriptionDate: "2026-09-18",
  pharmacyName: "Farmacia Demostración",
  staffName: "Usuario de Prueba",
  staffId: "USR-001",
};

const scenarios: Scenario[] = [
  {
    id: "clear",
    tone: "high",
    title: { en: "Clear reading", es: "Lectura clara" },
    description: {
      en: "All fields match the synthetic catalogs.",
      es: "Todos los campos coinciden con los catálogos sintéticos.",
    },
    prescription: {
      en: {
        id: "RX-DEMO-001",
        ...sharedPrescriptionEn,
        documentLines: [
          "Patient: Demo Patient 01 · ID-SYN-1001",
          "Fictamed Alpha — Qty. 20",
          "Take one unit every 12 hours",
          "Fictamed Luna — Qty. 10",
          "Take one unit at night",
        ],
        medications: [
          {
            id: "med-clear-1",
            name: "Fictamed Alpha",
            quantity: "20 units",
            dosage: "One unit every 12 hours",
            labelCount: 1,
            confidence: "high",
            needsReview: false,
            suggestions: [],
          },
          {
            id: "med-clear-2",
            name: "Fictamed Luna",
            quantity: "10 units",
            dosage: "One unit at night",
            labelCount: 2,
            confidence: "high",
            needsReview: false,
            suggestions: [],
          },
        ],
      },
      es: {
        id: "RX-DEMO-001",
        ...sharedPrescriptionEs,
        documentLines: [
          "Paciente: Paciente Demo 01 · ID-SYN-1001",
          "Fictamed Alfa — Cant. 20",
          "Tomar una unidad cada 12 horas",
          "Fictamed Luna — Cant. 10",
          "Tomar una unidad por la noche",
        ],
        medications: [
          {
            id: "med-clear-1",
            name: "Fictamed Alfa",
            quantity: "20 unidades",
            dosage: "Una unidad cada 12 horas",
            labelCount: 1,
            confidence: "high",
            needsReview: false,
            suggestions: [],
          },
          {
            id: "med-clear-2",
            name: "Fictamed Luna",
            quantity: "10 unidades",
            dosage: "Una unidad por la noche",
            labelCount: 2,
            confidence: "high",
            needsReview: false,
            suggestions: [],
          },
        ],
      },
    },
  },
  {
    id: "suggestions",
    tone: "medium",
    title: { en: "Possible matches", es: "Coincidencias posibles" },
    description: {
      en: "One medication requires selection from catalog suggestions.",
      es: "Un medicamento requiere elegir entre sugerencias del catálogo.",
    },
    prescription: {
      en: {
        id: "RX-DEMO-002",
        ...sharedPrescriptionEn,
        patientName: "Demo Patient 02",
        patientId: "ID-SYN-1002",
        documentLines: [
          "Patient: Demo Patient 02 · ID-SYN-1002",
          "Fictamed Br... — Qty. 12",
          "Take one unit every 8 hours",
        ],
        medications: [
          {
            id: "med-suggest-1",
            name: "Fictamed Br...",
            quantity: "12 units",
            dosage: "One unit every 8 hours",
            labelCount: 1,
            confidence: "medium",
            needsReview: true,
            suggestions: ["Fictamed Brisa", "Fictamed Bruma", "Fictamed Prisma"],
          },
        ],
      },
      es: {
        id: "RX-DEMO-002",
        ...sharedPrescriptionEs,
        patientName: "Paciente Demo 02",
        patientId: "ID-SYN-1002",
        documentLines: [
          "Paciente: Paciente Demo 02 · ID-SYN-1002",
          "Fictamed Br... — Cant. 12",
          "Tomar una unidad cada 8 horas",
        ],
        medications: [
          {
            id: "med-suggest-1",
            name: "Fictamed Br...",
            quantity: "12 unidades",
            dosage: "Una unidad cada 8 horas",
            labelCount: 1,
            confidence: "medium",
            needsReview: true,
            suggestions: ["Fictamed Brisa", "Fictamed Bruma", "Fictamed Prisma"],
          },
        ],
      },
    },
  },
  {
    id: "manual",
    tone: "low",
    title: { en: "Manual correction", es: "Corrección manual" },
    description: {
      en: "The simulated extraction cannot resolve the medication name.",
      es: "La extracción simulada no logra resolver el medicamento.",
    },
    prescription: {
      en: {
        id: "RX-DEMO-003",
        ...sharedPrescriptionEn,
        patientName: "Demo Patient 03",
        patientId: "ID-SYN-1003",
        documentLines: [
          "Patient: Demo Patient 03 · ID-SYN-1003",
          "[unreadable medication] — Qty. 8",
          "Use according to written directions",
        ],
        medications: [
          {
            id: "med-manual-1",
            name: "",
            quantity: "8 units",
            dosage: "Use according to written directions",
            labelCount: 1,
            confidence: "low",
            needsReview: true,
            suggestions: ["Fictamed Nova", "Fictamed Nube", "Fictamed Nexo"],
          },
        ],
      },
      es: {
        id: "RX-DEMO-003",
        ...sharedPrescriptionEs,
        patientName: "Paciente Demo 03",
        patientId: "ID-SYN-1003",
        documentLines: [
          "Paciente: Paciente Demo 03 · ID-SYN-1003",
          "[medicamento ilegible] — Cant. 8",
          "Usar según indicaciones escritas",
        ],
        medications: [
          {
            id: "med-manual-1",
            name: "",
            quantity: "8 unidades",
            dosage: "Usar según indicaciones escritas",
            labelCount: 1,
            confidence: "low",
            needsReview: true,
            suggestions: ["Fictamed Nova", "Fictamed Nube", "Fictamed Nexo"],
          },
        ],
      },
    },
  },
];

const copy = {
  en: {
    back: "Back to portfolio",
    eyebrow: "Interactive work sample",
    title: "Pharmaceutical Prescription Workflow",
    intro:
      "An anonymized recreation of a workflow I designed and built to assist pharmacists with prescription transcription and label preparation.",
    noticeTitle: "Safe demonstration",
    notice:
      "Every person, clinic, medication and identifier shown here is fictional. Extraction is simulated, no files can be uploaded, and no data leaves your browser.",
    notProduction: "Pre-production case study · No production outcomes claimed",
    steps: ["Choose a case", "Review extraction", "Preview labels"],
    chooseTitle: "Choose a synthetic prescription",
    chooseSub: "Three cases demonstrate how the workflow handles confidence and ambiguity.",
    document: "Synthetic prescription",
    start: "Run simulated extraction",
    restart: "Start over",
    reviewTitle: "Pharmacist review",
    reviewSub: "Review every field. Uncertain matches must be confirmed or corrected before labels can be generated.",
    fields: {
      patientName: "Patient name",
      patientId: "Patient ID",
      birthDate: "Date of birth",
      clinicName: "Clinic",
      doctorName: "Doctor",
      doctorRegistration: "Professional registration",
      prescriptionDate: "Prescription date",
      medication: "Medication",
      quantity: "Quantity",
      dosage: "Dosage",
      labelCount: "Number of labels",
    },
    medication: "Medication",
    confidence: { high: "High confidence", medium: "Needs review", low: "Low confidence" },
    alert: "Human confirmation required",
    alertDetail: "Select a catalog suggestion or enter the verified value manually.",
    suggestions: "Possible catalog matches",
    confirm: "Confirm current value",
    generate: "Generate label preview",
    unresolved: "Resolve every highlighted medication before continuing.",
    labelsTitle: "Label preview",
    labelsSub: "One label is generated per medication and container, using the quantities entered by the pharmacist.",
    label: {
      demo: "DEMONSTRATION · NOT FOR DISPENSING",
      patient: "Patient",
      pharmacy: "Dispensing pharmacy",
      medication: "Medication",
      quantity: "Quantity",
      dosage: "Directions",
      doctor: "Prescriber",
      registration: "Registration",
      dateTime: "Date and time",
      servedBy: "Served by",
      copy: "Label",
    },
    disclaimer: "Fictional data · Simulated workflow · No medical guidance",
  },
  es: {
    back: "Volver al portafolio",
    eyebrow: "Muestra interactiva de trabajo",
    title: "Flujo Farmacéutico de Prescripciones",
    intro:
      "Recreación anonimizada de un flujo que diseñé y desarrollé para asistir al farmacéutico con la transcripción de recetas y preparación de etiquetas.",
    noticeTitle: "Demostración segura",
    notice:
      "Todas las personas, clínicas, medicinas e identificadores son ficticios. La extracción es simulada, no se aceptan archivos y ningún dato sale de tu navegador.",
    notProduction: "Caso preproductivo · No se atribuyen resultados de producción",
    steps: ["Elegir un caso", "Revisar extracción", "Ver etiquetas"],
    chooseTitle: "Elige una prescripción sintética",
    chooseSub: "Tres casos demuestran cómo el flujo maneja la confianza y la ambigüedad.",
    document: "Prescripción sintética",
    start: "Ejecutar extracción simulada",
    restart: "Comenzar de nuevo",
    reviewTitle: "Revisión del farmacéutico",
    reviewSub: "Revisa cada campo. Las coincidencias inciertas deben confirmarse o corregirse antes de generar etiquetas.",
    fields: {
      patientName: "Nombre del paciente",
      patientId: "Cédula",
      birthDate: "Fecha de nacimiento",
      clinicName: "Clínica",
      doctorName: "Médico",
      doctorRegistration: "Registro profesional",
      prescriptionDate: "Fecha de la receta",
      medication: "Medicamento",
      quantity: "Cantidad",
      dosage: "Dosis",
      labelCount: "Cantidad de etiquetas",
    },
    medication: "Medicamento",
    confidence: { high: "Confianza alta", medium: "Requiere revisión", low: "Confianza baja" },
    alert: "Se requiere confirmación humana",
    alertDetail: "Selecciona una sugerencia del catálogo o escribe manualmente el valor verificado.",
    suggestions: "Posibles coincidencias del catálogo",
    confirm: "Confirmar valor actual",
    generate: "Generar vista de etiquetas",
    unresolved: "Resuelve cada medicamento resaltado antes de continuar.",
    labelsTitle: "Vista previa de etiquetas",
    labelsSub: "Se genera una etiqueta por medicamento y envase, según la cantidad indicada por el farmacéutico.",
    label: {
      demo: "DEMOSTRACIÓN · NO USAR PARA DESPACHO",
      patient: "Paciente",
      pharmacy: "Farmacia que despacha",
      medication: "Medicamento",
      quantity: "Cantidad",
      dosage: "Dosis",
      doctor: "Médico",
      registration: "Registro",
      dateTime: "Fecha y hora",
      servedBy: "Atendido por",
      copy: "Etiqueta",
    },
    disclaimer: "Datos ficticios · Flujo simulado · Sin orientación médica",
  },
} as const;

function clonePrescription(prescription: DemoPrescription): DemoPrescription {
  return {
    ...prescription,
    documentLines: [...prescription.documentLines],
    medications: prescription.medications.map((medication) => ({
      ...medication,
      suggestions: [...medication.suggestions],
    })),
  };
}

function DemoExperience({ lang }: { lang: Lang }) {
  const text = copy[lang];
  const [stage, setStage] = useState<Stage>("select");
  const [scenarioId, setScenarioId] = useState(scenarios[0].id);
  const selectedScenario = useMemo(
    () => scenarios.find((scenario) => scenario.id === scenarioId) ?? scenarios[0],
    [scenarioId],
  );
  const [prescription, setPrescription] = useState<DemoPrescription>(() =>
    clonePrescription(selectedScenario.prescription[lang]),
  );

  const selectScenario = (nextId: string) => {
    const next = scenarios.find((scenario) => scenario.id === nextId) ?? scenarios[0];
    setScenarioId(next.id);
    setPrescription(clonePrescription(next.prescription[lang]));
    setStage("select");
  };

  const updateField = (field: keyof DemoPrescription, value: string) => {
    setPrescription((current) => ({ ...current, [field]: value }));
  };

  const updateMedication = (id: string, changes: Partial<Medication>) => {
    setPrescription((current) => ({
      ...current,
      medications: current.medications.map((medication) =>
        medication.id === id ? { ...medication, ...changes } : medication,
      ),
    }));
  };

  const unresolved = prescription.medications.some(
    (medication) => medication.needsReview || !medication.name.trim(),
  );

  const generatedLabels = prescription.medications.flatMap((medication) =>
    Array.from({ length: medication.labelCount }, (_, index) => ({ medication, index })),
  );

  const startReview = () => {
    setPrescription(clonePrescription(selectedScenario.prescription[lang]));
    setStage("review");
  };

  return (
    <main className={styles.page} id="main-content">
      <div className={styles.shell}>
        <section className={styles.hero} aria-labelledby="demo-title">
          <div>
            <p className="eyebrow">{text.eyebrow}</p>
            <h1 id="demo-title">{text.title}</h1>
            <p className={styles.intro}>{text.intro}</p>
          </div>
          <p className={styles.status}>{text.notProduction}</p>
        </section>

        <aside className={styles.notice} aria-label={text.noticeTitle}>
          <span aria-hidden="true">◇</span>
          <div>
            <strong>{text.noticeTitle}</strong>
            <p>{text.notice}</p>
          </div>
        </aside>

        <ol className={styles.steps} aria-label={lang === "es" ? "Progreso de la demo" : "Demo progress"}>
          {text.steps.map((step, index) => {
            const currentIndex = stage === "select" ? 0 : stage === "review" ? 1 : 2;
            return (
              <li key={step} data-active={index === currentIndex} data-complete={index < currentIndex}>
                <span>{index + 1}</span>
                {step}
              </li>
            );
          })}
        </ol>

        {stage === "select" ? (
          <section className={styles.workspace} aria-labelledby="choose-title">
            <div className={styles.casePanel}>
              <div className={styles.panelHeading}>
                <p className="eyebrow">01 / 03</p>
                <h2 id="choose-title">{text.chooseTitle}</h2>
                <p>{text.chooseSub}</p>
              </div>
              <div className={styles.caseList} role="radiogroup" aria-label={text.chooseTitle}>
                {scenarios.map((scenario, index) => (
                  <button
                    type="button"
                    role="radio"
                    aria-checked={scenario.id === scenarioId}
                    className={styles.caseCard}
                    data-selected={scenario.id === scenarioId}
                    data-tone={scenario.tone}
                    key={scenario.id}
                    onClick={() => selectScenario(scenario.id)}
                  >
                    <span className={styles.caseNumber}>{String(index + 1).padStart(2, "0")}</span>
                    <strong>{scenario.title[lang]}</strong>
                    <span>{scenario.description[lang]}</span>
                  </button>
                ))}
              </div>
            </div>

            <DocumentPreview prescription={prescription} title={text.document} />

            <div className={styles.actionRow}>
              <button type="button" className="button button-primary" onClick={startReview}>
                {text.start}
                <span aria-hidden="true">→</span>
              </button>
            </div>
          </section>
        ) : null}

        {stage === "review" ? (
          <section className={styles.reviewSection} aria-labelledby="review-title">
            <div className={styles.panelHeading}>
              <p className="eyebrow">02 / 03</p>
              <h2 id="review-title">{text.reviewTitle}</h2>
              <p>{text.reviewSub}</p>
            </div>

            <div className={styles.reviewGrid}>
              <DocumentPreview prescription={prescription} title={text.document} />

              <form className={styles.reviewForm} onSubmit={(event) => event.preventDefault()}>
                <div className={styles.fieldGrid}>
                  <DemoField label={text.fields.patientName} value={prescription.patientName} onChange={(value) => updateField("patientName", value)} />
                  <DemoField label={text.fields.patientId} value={prescription.patientId} onChange={(value) => updateField("patientId", value)} />
                  <DemoField label={text.fields.birthDate} value={prescription.birthDate} type="date" onChange={(value) => updateField("birthDate", value)} />
                  <DemoField label={text.fields.prescriptionDate} value={prescription.prescriptionDate} type="date" onChange={(value) => updateField("prescriptionDate", value)} />
                  <DemoField label={text.fields.clinicName} value={prescription.clinicName} onChange={(value) => updateField("clinicName", value)} />
                  <DemoField label={text.fields.doctorName} value={prescription.doctorName} onChange={(value) => updateField("doctorName", value)} />
                  <DemoField label={text.fields.doctorRegistration} value={prescription.doctorRegistration} onChange={(value) => updateField("doctorRegistration", value)} />
                </div>

                <div className={styles.medicationList}>
                  {prescription.medications.map((medication, index) => (
                    <fieldset className={styles.medicationCard} data-review={medication.needsReview} key={medication.id}>
                      <legend>
                        {text.medication} {index + 1}
                        <span data-confidence={medication.confidence}>{text.confidence[medication.confidence]}</span>
                      </legend>

                      {medication.needsReview ? (
                        <div className={styles.reviewAlert} role="alert">
                          <strong>{text.alert}</strong>
                          <span>{text.alertDetail}</span>
                        </div>
                      ) : null}

                      <div className={styles.medicationFields}>
                        <DemoField
                          label={text.fields.medication}
                          value={medication.name}
                          placeholder={lang === "es" ? "Escribe el valor verificado" : "Enter the verified value"}
                          onChange={(value) => updateMedication(medication.id, { name: value, needsReview: false, confidence: "high" })}
                        />
                        <DemoField label={text.fields.quantity} value={medication.quantity} onChange={(value) => updateMedication(medication.id, { quantity: value })} />
                        <DemoField label={text.fields.dosage} value={medication.dosage} onChange={(value) => updateMedication(medication.id, { dosage: value })} />
                        <label className={styles.field}>
                          <span>{text.fields.labelCount}</span>
                          <input
                            type="number"
                            min={1}
                            max={6}
                            value={medication.labelCount}
                            onChange={(event) =>
                              updateMedication(medication.id, {
                                labelCount: Math.min(6, Math.max(1, Number(event.target.value) || 1)),
                              })
                            }
                          />
                        </label>
                      </div>

                      {medication.suggestions.length > 0 && medication.needsReview ? (
                        <div className={styles.suggestions}>
                          <p>{text.suggestions}</p>
                          <div>
                            {medication.suggestions.map((suggestion) => (
                              <button
                                type="button"
                                key={suggestion}
                                onClick={() =>
                                  updateMedication(medication.id, {
                                    name: suggestion,
                                    needsReview: false,
                                    confidence: "high",
                                  })
                                }
                              >
                                {suggestion}
                              </button>
                            ))}
                          </div>
                        </div>
                      ) : null}

                      {medication.needsReview && medication.name.trim() ? (
                        <button
                          type="button"
                          className={styles.confirmButton}
                          onClick={() => updateMedication(medication.id, { needsReview: false, confidence: "high" })}
                        >
                          {text.confirm}
                        </button>
                      ) : null}
                    </fieldset>
                  ))}
                </div>
              </form>
            </div>

            <div className={styles.actionRow}>
              <button type="button" className="button button-secondary" onClick={() => setStage("select")}>
                {text.restart}
              </button>
              <div>
                {unresolved ? <p className={styles.unresolved}>{text.unresolved}</p> : null}
                <button
                  type="button"
                  className="button button-primary"
                  disabled={unresolved}
                  onClick={() => setStage("labels")}
                >
                  {text.generate}
                  <span aria-hidden="true">→</span>
                </button>
              </div>
            </div>
          </section>
        ) : null}

        {stage === "labels" ? (
          <section className={styles.labelsSection} aria-labelledby="labels-title">
            <div className={styles.panelHeading}>
              <p className="eyebrow">03 / 03</p>
              <h2 id="labels-title">{text.labelsTitle}</h2>
              <p>{text.labelsSub}</p>
            </div>

            <div className={styles.labelGrid} aria-live="polite">
              {generatedLabels.map(({ medication, index }) => (
                <article className={styles.labelCard} key={`${medication.id}-${index}`}>
                  <header>
                    <strong>{text.label.demo}</strong>
                    <span>{prescription.id}</span>
                  </header>
                  <div className={styles.labelPrimary}>
                    <span>{text.label.medication}</span>
                    <h3>{medication.name}</h3>
                    <p>{medication.dosage}</p>
                  </div>
                  <dl>
                    <LabelFact label={text.label.patient} value={`${prescription.patientName} · ${prescription.patientId}`} />
                    <LabelFact label={text.label.pharmacy} value={prescription.pharmacyName} />
                    <LabelFact label={text.label.quantity} value={medication.quantity} />
                    <LabelFact label={text.label.doctor} value={prescription.doctorName} />
                    <LabelFact label={text.label.registration} value={prescription.doctorRegistration} />
                    <LabelFact label={text.label.dateTime} value={`${prescription.prescriptionDate} · 14:30`} />
                    <LabelFact label={text.label.servedBy} value={`${prescription.staffName} · ${prescription.staffId}`} />
                  </dl>
                  <footer>
                    {text.label.copy} {index + 1} / {medication.labelCount}
                  </footer>
                </article>
              ))}
            </div>

            <p className={styles.disclaimer}>{text.disclaimer}</p>
            <div className={styles.actionRow}>
              <button type="button" className="button button-secondary" onClick={() => setStage("review")}>
                {lang === "es" ? "Volver a revisar" : "Back to review"}
              </button>
              <button type="button" className="button button-primary" onClick={() => selectScenario(scenarioId)}>
                {text.restart}
              </button>
            </div>
          </section>
        ) : null}
      </div>
    </main>
  );
}

function DocumentPreview({ prescription, title }: { prescription: DemoPrescription; title: string }) {
  return (
    <article className={styles.document} aria-label={title}>
      <div className={styles.documentTopline}>
        <span>{title}</span>
        <span>{prescription.id}</span>
      </div>
      <div className={styles.documentMark} aria-hidden="true">℞</div>
      <p className={styles.documentClinic}>{prescription.clinicName}</p>
      <div className={styles.handwriting}>
        {prescription.documentLines.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>
      <div className={styles.documentSignature}>
        <span>{prescription.doctorName}</span>
        <span>{prescription.doctorRegistration}</span>
      </div>
      <p className={styles.syntheticStamp}>SYNTHETIC / SINTÉTICA</p>
    </article>
  );
}

function DemoField({
  label,
  value,
  onChange,
  type = "text",
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: "text" | "date";
  placeholder?: string;
}) {
  return (
    <label className={styles.field}>
      <span>{label}</span>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        required
        onChange={(event) => onChange(event.target.value)}
      />
    </label>
  );
}

function LabelFact({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt>{label}</dt>
      <dd>{value}</dd>
    </div>
  );
}

export default function PharmacySystemDemo() {
  const { lang, setLang } = useLang();

  return (
    <>
      <header className={styles.topbar}>
        <div className={styles.topbarInner}>
          <Link className={styles.brand} href="/" aria-label="José Serrano — Home">
            <span>JS</span>
            <strong>José Serrano</strong>
          </Link>
          <div className={styles.topbarActions}>
            <div className={styles.langControl} aria-label={lang === "es" ? "Idioma" : "Language"}>
              <button type="button" aria-pressed={lang === "en"} onClick={() => setLang("en")}>EN</button>
              <span aria-hidden="true">/</span>
              <button type="button" aria-pressed={lang === "es"} onClick={() => setLang("es")}>ES</button>
            </div>
            <Link href="/#projects">
              <span aria-hidden="true">←</span>
              <span className={styles.backLabel}>{copy[lang].back}</span>
            </Link>
          </div>
        </div>
      </header>
      <DemoExperience key={lang} lang={lang} />
    </>
  );
}
