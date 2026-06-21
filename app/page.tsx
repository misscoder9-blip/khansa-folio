import Hero from '@/app/components/sections/Hero';
import Projects from '@/app/components/sections/Projects';
import Philosophy from '@/app/components/sections/Philosophy';
import Clients from '@/app/components/sections/Clients';
import Contact from '@/app/components/sections/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <Philosophy />
      <Clients />
      <Contact />
    </>
  );
}
