import React from "react";
import Link from "next/link";
import ProjectCard from "@/app/components/ui/ProjectCard";
import { getAllProjects } from "@/app/data/projects";

const projects = getAllProjects();

export default function Projects() {
  return (
    <section
      id="work"
      className="py-6 px-4 sm:px-6 lg:px-[60px] bg-[#F8F9FA]"
    >
      <div className="max-w-[1440px] mx-auto">
        {/* Section Header */}
        <div className="mb-10 md:mb-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          {/* Main Heading */}
          <h2
            className="text-4xl md:text-5xl lg:text-[60px] font-bold text-[#070707] leading-normal tracking-[-1.8px] max-w-[664px]"
            style={{ fontFamily: "var(--font-satoshi)" }}
          >
            A Collection of Purposeful{" "}
            <span
              className="italic font-bold"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Interfaces
            </span>
            .
          </h2>

          {/* Featured Work Container */}
          <div className="flex flex-col gap-3 items-start lg:items-end w-full lg:w-auto lg:max-w-[296px]">
            {/* Featured Work Title */}
            <div className="flex items-start">
              <p
                className="text-xl md:text-2xl font-bold text-[#070707] whitespace-nowrap"
                style={{ fontFamily: "var(--font-satoshi)" }}
              >
                Designing{" "}
                <span
                  className="italic font-bold text-[#ff805e]"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  Experiences
                </span>
                <span
                  className="italic font-bold"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {" "}
                  With Purpose
                </span>
              </p>
            </div>

            {/* Description */}
            <p
              className="text-base md:text-[16px] text-[#5f6266] text-left lg:text-right w-full lg:w-[296px]"
              style={{ fontFamily: "var(--font-satoshi)" }}
            >
              A closer look at the projects, thinking, and design decisions behind my work.
            </p>

            {/* Button */}
            <Link
              href="/work"
              className="bg-[#070707] text-white px-6 py-3 rounded-[38px] shadow-[0px_0px_12px_0px_rgba(0,0,0,0.25)] text-lg font-medium whitespace-nowrap inline-block"
              style={{ fontFamily: "var(--font-satoshi)" }}
            >
              See all work
            </Link>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.slug}
              title={project.title}
              description={project.description}
              year={project.year}
              client={project.client}
              type={project.type}
              timeline={project.timeline}
              backgroundColor={project.backgroundColor}
              previewImage={project.previewImage}
              previewAlt={`${project.title} project preview`}
              href={`/projects/${project.slug}`}
              descriptionMaxWidth={index === 2 ? "md:max-w-[306px]" : "md:max-w-[315px]"}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
