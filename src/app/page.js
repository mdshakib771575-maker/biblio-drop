import Banner from "@/components/Banner";
import FeaturedBooks from "@/components/FeaturedBooks";
import HowItWorks from "@/components/HowItWorksStats";
import NewsletterSection from "@/components/NewsletterSection";
import StatsSection from "@/components/StatsSection";
import TestimonialSection from "@/components/TestimonialSection";
import TopLibrarians from "@/components/TopLibrarians";


export default function Home() {
  return (
    <div>
     <Banner></Banner>
     <FeaturedBooks></FeaturedBooks>
     <HowItWorks></HowItWorks>
     <StatsSection></StatsSection>
     <TopLibrarians></TopLibrarians>
     <TestimonialSection></TestimonialSection>
     <NewsletterSection></NewsletterSection>
    </div> 
  );
}
export const dynamic = "force-dynamic";
