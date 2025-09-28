import React from "react";

import Header from "./components/header";
import Hero from "./components/hero";
import Benefits from "./components/benefits";
import TravelPackage from "./components/travelPackage";
import ImpactSection from "./components/impactSection";
import Pricing from "./components/pricing";
import FAQ from "./components/faq";
import AboutUs from "./components/aboutUs";
import Gallery from "./components/gallery";
import Testimonials from "./components/testimonials";
import Footer from "./components/footer";
import ScrollToTopButton from "./components/scrollToTopButton";
import FloatingWpp from "./components/floatingWhatsApp";

export default function App() {
  const wppPhone = "5554991831562";
  const wppMsg =
    "Olá! Estou navegando na página da viagem para o Atacama e gostaria de tirar uma dúvida!";

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Benefits />
        <TravelPackage />
        <ImpactSection />
        <Pricing />
        <FAQ />
        <AboutUs />
        <Gallery />
        <Testimonials />
      </main>
      <Footer />

      <ScrollToTopButton />

      <FloatingWpp
        phone={wppPhone}
        message={wppMsg}
        imageSrc="/img/logowpp.png"
        // Configurações para DESKTOP
        size={58}
        right={24}
        bottom={28}
        safeBottomBump={62}
        imageScale={1.15}
        imageShiftX={0}
        imageShiftY={-2}
        // Configurações para MOBILE
        mobileSize={32}
        mobileRight={24}
        mobileBottom={34}
        mobileSafeBottomBump={508}
        mobileImageScale={1.15}
        mobileImageShiftX={0}
        mobileImageShiftY={-2}
      />
    </div>
  );
}