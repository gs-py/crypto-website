import Features from "@/components/features-1";
import HeroSection from "@/components/Herosection";
import ServiceSelection from "@/components/Selection";

const Landingpage = () => {
  return (
    <div className="w-screen h-screen">
      {/* <HeroHeader /> */}
      <HeroSection />

      <ServiceSelection />
      <Features />
    </div>
  );
};

export default Landingpage;
