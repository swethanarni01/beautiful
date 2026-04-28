import React from "react";
import SplineHero from "./sections/SplineHero.jsx";
import EvervaultSection from "./sections/EvervaultSection.jsx";
import FeatureTabsSection from "./sections/FeatureTabsSection.jsx";
import LogoCloudSection from "./sections/LogoCloudSection.jsx";
import TestimonialsSection from "./sections/TestimonialsSection.jsx";
import WorldMapSection from "./sections/WorldMapSection.jsx";
import FaqSection from "./sections/FaqSection.jsx";
import NavbarSection from "./sections/NavbarSection.jsx";

export default function App() {
  return (
    <>
      <NavbarSection />
      <SplineHero />
      <EvervaultSection />
      <FeatureTabsSection />
      <LogoCloudSection />
      <TestimonialsSection />
      <WorldMapSection />
      <FaqSection />
    </>
  );
}
