import WorkHero from "@/app/components/sections/WorkHero";
import WorkProjects from "@/app/components/sections/WorkProjects";
import SocialWorks from "@/app/components/sections/SocialWorks";
import FAQ from "@/app/components/sections/FAQ";
import Contact from "@/app/components/sections/Contact";

function InstagramIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="2" width="20" height="20" rx="5" stroke="white" strokeWidth="2" />
      <circle cx="12" cy="12" r="5" stroke="white" strokeWidth="2" />
      <circle cx="18" cy="6" r="1.5" fill="white" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="2" y="9" width="4" height="12" stroke="white" strokeWidth="2" />
      <circle cx="4" cy="4" r="2" stroke="white" strokeWidth="2" />
    </svg>
  );
}

function DribbbleIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2" />
      <path d="M8.56 2.75C12.93 8.78 14.58 12.17 16.59 20.47" stroke="white" strokeWidth="2" strokeLinecap="round" />
      <path d="M19.13 5.09C15.22 9.72 10.01 11.98 2.25 12.77" stroke="white" strokeWidth="2" strokeLinecap="round" />
      <path d="M21.75 12.84C16.52 11.15 12.58 11.34 6.3 14.43" stroke="white" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export default function WorkPage() {
  return (
    <>
      <WorkHero />
      <WorkProjects />

      <SocialWorks
        platform="Instagram"
        icon={<InstagramIcon />}
        description="Check out my Instagram shots for polished Ul designs, creative concepts, and visual explorations across various design disciplines."
        profileUrl="https://instagram.com/ui.khansa"
        buttonText="Go to Instagram"
        posts={[
          "/assets/images/socialworks/insta-post-1.png",
          "/assets/images/socialworks/insta-post-2.png",
          "/assets/images/socialworks/insta-post-3.png",
        ]}
      />

      <SocialWorks
        platform="LinkedIn"
        icon={<LinkedInIcon />}
        description="Follow my LinkedIn for professional insights, case studies, and detailed breakdowns of my design process and project outcomes."
        profileUrl="https://linkedin.com"
        buttonText="Go to LinkedIn"
        cardType="linkedin"
        posts={[
          "/assets/images/socialworks/linkedin-post-1.png",
          "/assets/images/socialworks/linkedin-post-2.png",
          "/assets/images/socialworks/linkedin-post-3.png",
        ]}
      />

      <SocialWorks
        platform="Dribble"
        icon={<DribbbleIcon />}
        description=""
        profileUrl="https://dribbble.com"
        buttonText="Go to Dribble"
        cardType="dribbble"
        posts={[
          "/assets/images/socialworks/dribbble-post-1.png",
          "/assets/images/socialworks/dribbble-post-2.png",
          "/assets/images/socialworks/dribbble-post-3.png",
        ]}
      />

      <FAQ />
      <Contact />
    </>
  );
}
