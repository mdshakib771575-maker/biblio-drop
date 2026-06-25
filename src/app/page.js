import Banner from "@/components/Banner";
import HowItWorks from "@/components/HowItWorksStats";
import TestimonialSection from "@/components/TestimonialSection";
import TopLibrarians from "@/components/TopLibrarians";


export default function Home() {
  return (
    <div>
     <Banner></Banner>
     <HowItWorks></HowItWorks>
     <TopLibrarians></TopLibrarians>
     <TestimonialSection></TestimonialSection>
    </div>
  );
}
