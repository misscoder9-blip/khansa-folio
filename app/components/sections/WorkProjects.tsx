"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import ProjectCard from "@/app/components/ui/ProjectCard";
import { getAllProjects, type ProjectData } from "@/app/data/projects";

const workProjects = getAllProjects();

function ProjectInfoCard({ project }: { project: ProjectData }) {
  const href = `/projects/${project.slug}`;
  return (
    <div className="bg-white rounded-[24px] px-5 py-6 md:px-8 md:py-10 flex flex-col justify-between h-full">
      {/* Top content */}
      <div className="flex flex-col gap-[17px] md:gap-[54px]">
        {/* Logo + Mobile Arrow */}
        <div className="flex items-center justify-between">
          <div className="h-[23px] md:h-[49px] w-auto relative">
            <Image
              src={project.logo}
              alt={project.logoAlt}
              width={209}
              height={49}
              className="object-contain object-left h-full w-auto"
            />
          </div>
          {/* Mobile arrow icon */}
          <Link
            href={href}
            className="md:hidden w-[38px] h-[38px] bg-[#070707] rounded-full flex items-center justify-center shadow-[0px_0px_8px_0px_rgba(0,0,0,0.12)]"
          >
            <Image
              src="/assets/icons/arrowright.svg"
              alt="Arrow"
              width={15}
              height={15}
              className="invert"
            />
          </Link>
        </div>

        {/* Tags */}
        <p
          className="text-xs md:text-[20px] font-medium text-[#ff805e] leading-normal"
          style={{ fontFamily: "var(--font-satoshi)" }}
        >
          {project.tags}
        </p>

        {/* Title + Description */}
        <div className="flex flex-col gap-1.5 md:gap-3">
          <h3
            className="text-base md:text-[32px] font-bold text-[#070707] leading-normal"
            style={{ fontFamily: "var(--font-satoshi)" }}
          >
            {project.caseStudyTitle}
          </h3>
          <p
            className="text-xs md:text-[20px] font-normal text-[#5f6266] leading-normal"
            style={{ fontFamily: "var(--font-satoshi)" }}
          >
            {project.caseStudyDescription}
          </p>
        </div>
      </div>

      {/* View Project Button - Desktop only */}
      <Link
        href={href}
        className="hidden md:flex mt-10 w-full bg-[#070707] rounded-[38px] shadow-[0px_0px_12px_0px_rgba(0,0,0,0.25)] h-12 items-center justify-start relative overflow-hidden group border-2 border-[#070707]"
      >
        {/* Expanding white background */}
        <span className="absolute inset-0 bg-white rounded-[38px] transform origin-right scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100"></span>

        {/* Text */}
        <span
          className="text-[18px] font-medium relative z-10 text-white transition-colors duration-500 group-hover:text-[#070707] pl-6"
          style={{ fontFamily: "var(--font-satoshi)" }}
        >
          View Project
        </span>

        {/* Arrow circle */}
        <div className="absolute right-1 w-10 h-10 bg-white rounded-full flex items-center justify-center z-10">
          <Image
            src="/assets/icons/arrowright.svg"
            alt="Arrow"
            width={15}
            height={15}
          />
        </div>
      </Link>
    </div>
  );
}

export default function WorkProjects() {
  return (
    <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-[60px] bg-[#F8F9FA]">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col gap-6">
          {workProjects.map((project, index) => {
            const href = `/projects/${project.slug}`;
            return (
              <div
                key={project.slug}
                className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6"
              >
                {/* Mobile: always info first, then card */}
                {/* Desktop: alternate info/card positions */}
                {index % 2 === 0 ? (
                  <>
                    <ProjectInfoCard project={project} />
                    <ProjectCard
                      title={project.title}
                      description={project.description}
                      year={project.year}
                      client={project.client}
                      type={project.type}
                      timeline={project.timeline}
                      backgroundColor={project.backgroundColor}
                      previewImage={project.previewImage}
                      previewAlt={`${project.title} project preview`}
                      href={href}
                    />
                  </>
                ) : (
                  <>
                    <div className="md:hidden">
                      <ProjectInfoCard project={project} />
                    </div>
                    <ProjectCard
                      title={project.title}
                      description={project.description}
                      year={project.year}
                      client={project.client}
                      type={project.type}
                      timeline={project.timeline}
                      backgroundColor={project.backgroundColor}
                      previewImage={project.previewImage}
                      previewAlt={`${project.title} project preview`}
                      href={href}
                    />
                    <div className="hidden md:block">
                      <ProjectInfoCard project={project} />
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
