import HeroSection from "@/components/HeroSection";
import FeaturedCourses from "@/components/FeaturedCourses";
import WhyChooseUs from "@/components/WhyChooseUs";
import TestiMonialCard from "@/components/TestiMonialCard";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
   <h1 className="text-2xl text-center"></h1>
   <HeroSection />
   <div className="pb-20 ">
   <FeaturedCourses />
    </div>
    <WhyChooseUs />
    <TestiMonialCard />
   </main>
  );
}
