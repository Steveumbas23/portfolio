import type { ComponentType } from "react";
import { notFound } from "next/navigation";
import CaseStudyModal from "../../../components/case-study-modal";
import AdventistLibraryCaseStudyPage from "../../../projects/adventist-paal-2-library/page";
import ChampsCaseStudyPage from "../../../projects/champs/page";
import CourtlineCaseStudyPage from "../../../projects/courtline/page";
import DayOneCaseStudyPage from "../../../projects/dayone/page";
import LaporJalanCaseStudyPage from "../../../projects/lapor-jalan/page";
import LucitCaseStudyPage from "../../../projects/lucit/page";
import OpenMileCaseStudyPage from "../../../projects/openmile/page";
import PertaminaCaseStudyPage from "../../../projects/pertamina-offshore/page";
import VitaeCaseStudyPage from "../../../projects/vitae/page";

const caseStudyPages: Record<string, ComponentType> = {
  "adventist-paal-2-library": AdventistLibraryCaseStudyPage,
  champs: ChampsCaseStudyPage,
  courtline: CourtlineCaseStudyPage,
  dayone: DayOneCaseStudyPage,
  "lapor-jalan": LaporJalanCaseStudyPage,
  lucit: LucitCaseStudyPage,
  openmile: OpenMileCaseStudyPage,
  "pertamina-offshore": PertaminaCaseStudyPage,
  vitae: VitaeCaseStudyPage,
};

export function generateStaticParams() {
  return Object.keys(caseStudyPages).map((project) => ({ project }));
}

export default async function InterceptedCaseStudyPage({
  params,
}: {
  params: Promise<{ project: string }>;
}) {
  const { project } = await params;
  const Page = caseStudyPages[project];

  if (!Page) notFound();

  return (
    <CaseStudyModal>
      <Page />
    </CaseStudyModal>
  );
}
