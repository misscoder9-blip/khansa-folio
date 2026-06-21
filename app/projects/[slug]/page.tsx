import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  getAllProjects,
  getProjectBySlug,
  getAdjacentProjects,
} from "@/app/data/projects";

import ProjectHero from "@/app/components/sections/project-detail/ProjectHero";
import FullWidthShowcase from "@/app/components/sections/project-detail/FullWidthShowcase";
import ChallengeCards from "@/app/components/sections/project-detail/ChallengeCards";
import DarkTestimonials from "@/app/components/sections/project-detail/DarkTestimonials";
import ImageSection from "@/app/components/sections/project-detail/ImageSection";
import SolutionShowcase from "@/app/components/sections/project-detail/SolutionShowcase";
import GoalsMetrics from "@/app/components/sections/project-detail/GoalsMetrics";
import PersonaCard from "@/app/components/sections/project-detail/PersonaCard";
import ResultsMetrics from "@/app/components/sections/project-detail/ResultsMetrics";
import ProjectNavFooter from "@/app/components/sections/project-detail/ProjectNavFooter";
import VideoPreviewSection from "@/app/components/sections/project-detail/VideoPreviewSection";
import CloserLookSection from "@/app/components/sections/project-detail/CloserLookSection";
import MobileFirstSection from "@/app/components/sections/project-detail/MobileFirstSection";
import UserFlowSection from "@/app/components/sections/project-detail/UserFlowSection";
import TeamDiagramSection from "@/app/components/sections/project-detail/TeamDiagramSection";
import DesignSystemSection from "@/app/components/sections/project-detail/DesignSystemSection";
import UsabilityTestingSection from "@/app/components/sections/project-detail/UsabilityTestingSection";
import AllDevicesSection from "@/app/components/sections/project-detail/AllDevicesSection";
import DocumentationSection from "@/app/components/sections/project-detail/DocumentationSection";
import AppOverviewShowcase from "@/app/components/sections/project-detail/AppOverviewShowcase";
import PanelsShowcase from "@/app/components/sections/project-detail/PanelsShowcase";
import FeatureShowcase from "@/app/components/sections/project-detail/FeatureShowcase";

export function generateStaticParams() {
  return getAllProjects().map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} - Khansafolio`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const { previous, next } = getAdjacentProjects(slug);
  const detail = project.detail;

  // If no detail content, show a coming soon page
  if (!detail) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center px-4">
        <h1
          className="text-4xl md:text-5xl font-bold text-[#070707] mb-4 text-center"
          style={{ fontFamily: "var(--font-satoshi)" }}
        >
          {project.title}
        </h1>
        <p
          className="text-lg text-[#5f6266] mb-8 text-center"
          style={{ fontFamily: "var(--font-satoshi)" }}
        >
          Case study coming soon.
        </p>
        <ProjectNavFooter previous={previous} next={next} />
      </div>
    );
  }

  return (
    <>
      {/* Hero */}
      <ProjectHero hero={detail.hero} projectTitle={project.title} />

      {/* Interviews */}
      {detail.interviews.heading !== "TBD" && (
        <DarkTestimonials
          heading={detail.interviews.heading}
          headingItalic={detail.interviews.headingItalic}
          description={detail.interviews.description}
          descriptionBullets={detail.interviews.descriptionBullets}
          testimonials={detail.interviews.testimonials}
        />
      )}

      {/* Challenge (hidden on mobile) */}
      {detail.challenge && (
        <div className="hidden md:block">
          <ChallengeCards
            heading={detail.challenge.heading}
            headingItalic={detail.challenge.headingItalic}
            description={detail.challenge.description}
            cards={detail.challenge.cards}
          />
        </div>
      )}

      {/* Full-width showcase — app-overview composite, panels showcase, or simple media */}
      {detail.appOverview ? (
        <AppOverviewShowcase {...detail.appOverview} />
      ) : detail.panelsShowcase ? (
        <PanelsShowcase rows={detail.panelsShowcase.rows} />
      ) : detail.showcaseSection ? (
        <FullWidthShowcase
          type={detail.showcaseSection.type}
          src={detail.showcaseSection.src}
        />
      ) : null}

      {/* User Flow */}
      {detail.userFlow.heading !== "TBD" && (
        <UserFlowSection
          heading={detail.userFlow.heading}
          headingItalic={detail.userFlow.headingItalic}
          description={detail.userFlow.description}
          flowchart={detail.userFlow.flowchart}
        />
      )}

      {/* Solution — feature cards or centered media + callouts (hidden on mobile) */}
      {detail.featureShowcase ? (
        <FeatureShowcase
          heading={detail.featureShowcase.heading}
          headingItalic={detail.featureShowcase.headingItalic}
          description={detail.featureShowcase.description}
          decorativeImage={detail.featureShowcase.decorativeImage}
          cards={detail.featureShowcase.cards}
        />
      ) : detail.solution.heading !== "TBD" ? (
        <div className="hidden md:block">
          <SolutionShowcase
            heading={detail.solution.heading}
            headingItalic={detail.solution.headingItalic}
            description={detail.solution.description}
            video={detail.solution.video}
            image={detail.solution.image}
            mediaSize={detail.solution.mediaSize}
            callouts={detail.solution.callouts}
          />
        </div>
      ) : null}

      {/* Other Problems */}
      {detail.otherProblems.heading !== "TBD" && (
        <ChallengeCards
          heading={detail.otherProblems.heading}
          headingItalic={detail.otherProblems.headingItalic}
          cards={detail.otherProblems.cards}
        />
      )}

      {/* Goals & Metrics (hidden on mobile) */}
      {detail.goals.heading !== "TBD" && (
        <div className="hidden md:block">
          <GoalsMetrics
            heading={detail.goals.heading}
            headingItalic={detail.goals.headingItalic}
            goals={detail.goals.goals}
            successMetrics={detail.goals.successMetrics}
          />
        </div>
      )}

      {/* Personas (hidden on mobile) */}
      {detail.personas.heading !== "TBD" && (
        <div className="hidden md:block">
          <PersonaCard
            heading={detail.personas.heading}
            headingItalic={detail.personas.headingItalic}
            description={detail.personas.description}
            persona={detail.personas.persona}
          />
        </div>
      )}

      {/* Team Diagram (hidden on mobile) */}
      {detail.teamDiagram.heading !== "TBD" && (
        <div className="hidden md:block">
          <TeamDiagramSection
            heading={detail.teamDiagram.heading}
            headingItalic={detail.teamDiagram.headingItalic}
            description={detail.teamDiagram.description}
            teamTitle={detail.teamDiagram.teamTitle}
            teamPlatform={detail.teamDiagram.teamPlatform}
          />
        </div>
      )}

      {/* Design System */}
      {detail.designSystem.heading !== "TBD" && (
        <DesignSystemSection
          heading={detail.designSystem.heading}
          headingItalic={detail.designSystem.headingItalic}
          description={detail.designSystem.description}
          variant={detail.designSystem.variant}
          assets={detail.designSystem.assets}
        />
      )}

      {/* Mobile-First / Website-First Design (hidden on mobile) */}
      {detail.mobileFirst.heading !== "TBD" && (
        <div className="hidden md:block">
          <MobileFirstSection
            heading={detail.mobileFirst.heading}
            headingItalic={detail.mobileFirst.headingItalic}
            description={detail.mobileFirst.description}
            video={detail.mobileFirst.video}
            frame={detail.mobileFirst.frame}
            image={detail.mobileFirst.image}
            websiteVideo={detail.mobileFirst.websiteVideo}
          />
        </div>
      )}

      {/* Design Enhancements - Closer Look (hidden on mobile) */}
      {detail.designEnhancements.heading !== "TBD" && (
        <div className="hidden md:block">
          <CloserLookSection
            heading={detail.designEnhancements.heading}
            headingItalic={detail.designEnhancements.headingItalic}
            description={detail.designEnhancements.description}
            mockups={detail.designEnhancements.mockups}
          />
        </div>
      )}

      {/* Admin Dashboard (hidden on mobile) */}
      {detail.adminDashboard.video && (
        <div className="hidden md:block">
          <FullWidthShowcase
            type="macbook"
            src={detail.adminDashboard.video}
            heading={detail.adminDashboard.heading}
            headingItalic={detail.adminDashboard.headingItalic}
            description={detail.adminDashboard.description}
            macbookFrame={detail.adminDashboard.macbookFrame}
            macbookScreenArea={detail.adminDashboard.macbookScreenArea}
          />
        </div>
      )}

      {/* Usability Testing */}
      {detail.usabilityTesting.heading !== "TBD" && (
        <UsabilityTestingSection
          topHeading={detail.usabilityTesting.topHeading}
          topHeadingItalic={detail.usabilityTesting.topHeadingItalic}
          topDescription={detail.usabilityTesting.topDescription}
          heading={detail.usabilityTesting.heading}
          headingItalic={detail.usabilityTesting.headingItalic}
          description={detail.usabilityTesting.description}
          descriptionBullets={detail.usabilityTesting.descriptionBullets}
          phoneImage={detail.usabilityTesting.phoneImage}
          phoneFramed={detail.usabilityTesting.phoneFramed}
          darkCardHeading={detail.usabilityTesting.darkCardHeading}
          darkCardHeadingItalic={detail.usabilityTesting.darkCardHeadingItalic}
          challenges={detail.usabilityTesting.challenges}
          solutions={detail.usabilityTesting.solutions}
        />
      )}

      {/* Video Preview (hidden on mobile) */}
      {detail.videoPreview.panels.length > 0 && (
        <div className="hidden md:block">
          <VideoPreviewSection panels={detail.videoPreview.panels} />
        </div>
      )}

      {/* All Devices */}
      {detail.allDevices.heading !== "TBD" && (
        <AllDevicesSection
          heading={detail.allDevices.heading}
          headingItalic={detail.allDevices.headingItalic}
          description={detail.allDevices.description}
          macbookVideo={detail.allDevices.macbookVideo}
          phoneVideo={detail.allDevices.phoneVideo}
        />
      )}

      {/* Scalability (hidden on mobile) */}
      {detail.scalability.video && (
        <div className="hidden md:block">
          <FullWidthShowcase
            type={detail.scalability.type ?? "frame"}
            src={detail.scalability.video}
            heading={detail.scalability.heading}
            headingItalic={detail.scalability.headingItalic}
            description={detail.scalability.description}
          />
        </div>
      )}

      {/* Documentation */}
      {detail.documentation.heading !== "TBD" && (
        <DocumentationSection
          heading={detail.documentation.heading}
          headingItalic={detail.documentation.headingItalic}
          description={detail.documentation.description}
          showMobileGrid={detail.documentation.showMobileGrid}
          showDesktopGrid={detail.documentation.showDesktopGrid}
        />
      )}

      {/* Results (hidden on mobile) */}
      {detail.results.heading !== "TBD" && (
        <div className="hidden md:block">
          <ResultsMetrics
            heading={detail.results.heading}
            headingItalic={detail.results.headingItalic}
            metrics={detail.results.metrics}
          />
        </div>
      )}

      {/* Project Navigation */}
      <ProjectNavFooter previous={previous} next={next} />
    </>
  );
}
