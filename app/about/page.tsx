import React from 'react';
import AboutHero from '@/app/components/sections/AboutHero';
import MainServices from '@/app/components/sections/MainServices';
import ExperienceInterface from '@/app/components/sections/ExperienceInterface';
import Certifications from '@/app/components/sections/Certifications';
import Philosophy from '@/app/components/sections/Philosophy';
import Clients from '@/app/components/sections/Clients';
import Contact from '@/app/components/sections/Contact';

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <MainServices />
      <ExperienceInterface />
      <Certifications />
      <Philosophy />
      <Clients />
      <Contact />
    </>
  );
}
