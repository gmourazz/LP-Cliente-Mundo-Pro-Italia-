import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden pt-4 md:pt-6"
      style={{ background: "#AC0039" }}
    >
      <style>{`
        /* Sobe um pouco os textos (colunas esquerda/direita) a partir de md */
        :root { 
          --heroTextUp: -16px; /* ajuste fino: valor negativo sobe, positivo desce */
        }

        /* ===== DESKTOP MANTIDO EXATAMENTE COMO ESTÁ ===== */
        
        /* Mobile First - Base (320px+) */
        .hero-image-container {
          height: 320px;
          border-top-left-radius: 80px;
          border-top-right-radius: 80px;
        }

        /* Small Mobile - 375px+ (iPhone SE, etc) */
        @media (min-width: 375px) {
          .hero-image-container {
            height: 360px;
            border-top-left-radius: 100px;
            border-top-right-radius: 100px;
          }
        }

        /* Mobile Large - 425px+ */
        @media (min-width: 425px) {
          .hero-image-container {
            height: 380px;
            border-top-left-radius: 110px;
            border-top-right-radius: 110px;
          }
        }

        /* Tablet - 768px+ (iPad Mini) */
        @media (min-width: 768px) {
          .hero-image-container {
            height: 500px;
            border-top-left-radius: 160px;
            border-top-right-radius: 160px;
            transform: translateY(80px);
          }
        }

        /* Tablet Large - 1024px+ (iPad Air) */
        @media (min-width: 1024px) {
          .hero-image-container {
            height: 560px;
            border-top-left-radius: 180px;
            border-top-right-radius: 180px;
            transform: translateY(120px);
          }
        }

        /* Desktop Small - 1280px+ */
        @media (min-width: 1280px) {
          .hero-image-container {
            height: 600px;
            border-top-left-radius: 200px;
            border-top-right-radius: 200px;
            transform: translateY(10px);
          }
        }

        /* Desktop Standard - 1440px+ */
        @media (min-width: 1440px) {
          .hero-image-container {
            height: 590px;
            border-top-left-radius: 220px;
            border-top-right-radius: 220px;
            transform: translateY(10px);
          }
        }

        /* Desktop Large - 1920px+ (Full HD) */
        @media (min-width: 1920px) {
          .hero-image-container {
            height: 700px;
            border-top-left-radius: 240px;
            border-top-right-radius: 240px;
            transform: translateY(10px);
          }
        }

        /* 4K Screens - 2560px+ */
        @media (min-width: 2560px) {
          .hero-image-container {
            height: 720px;
            border-top-left-radius: 260px;
            border-top-right-radius: 260px;
            transform: translateY(240px);
          }
        }

        /* Container da imagem maior */
        .hero-image-wrapper {
          width: 100%;
          max-width: 100%;
        }

        /* Ajuste para imagem mais esticada */
        @media (min-width: 768px) {
          .hero-image-wrapper {
            max-width: 95%;
          }
        }

        @media (min-width: 1024px) {
          .hero-image-wrapper {
            max-width: 90%;
          }
        }

        @media (min-width: 1440px) {
          .hero-image-wrapper {
            max-width: 85%;
          }
        }

        /* AJUSTE: Textos alinhados e um pouco mais altos (usando calc + var) */
        @media (min-width: 768px) {
          .text-left-column {
            padding-top: calc(140px + var(--heroTextUp)); /* antes: 140px */
          }
          .text-right-column {
            padding-top: calc(140px + var(--heroTextUp)); /* antes: 140px */
          }
        }

        @media (min-width: 1024px) {
          .text-left-column {
            padding-top: calc(160px + var(--heroTextUp)); /* antes: 160px */
          }
          .text-right-column {
            padding-top: calc(160px + var(--heroTextUp)); /* antes: 160px */
          }
        }

        @media (min-width: 1280px) {
          .text-left-column {
            padding-top: calc(180px + var(--heroTextUp)); /* antes: 180px */
          }
          .text-right-column {
            padding-top: calc(180px + var(--heroTextUp)); /* antes: 180px */
          }
        }

        @media (min-width: 1440px) {
          .text-left-column {
            padding-top: calc(200px + var(--heroTextUp)); /* antes: 200px */
          }
          .text-right-column {
            padding-top: calc(200px + var(--heroTextUp)); /* antes: 200px */
          }
        }

        /* Animações */
        @keyframes marqueeX { 
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @keyframes marqueeMobile { 
          0% { transform: translate3d(0,0,0); }
          100% { transform: translate3d(-33.3333%,0,0); }
        }

        .marquee-track { 
          display: flex; 
          width: 200%;
          animation: marqueeX 14s linear infinite;
        }

        .marquee-track > span { 
          flex: 0 0 50%; 
          white-space: nowrap;
        }

        .marquee-mobile__inner { 
          display: flex; 
          width: 300%; 
          animation: marqueeMobile 6s linear infinite;
          will-change: transform;
        }

        .marquee-mobile__group { 
          flex: 0 0 33.3333%; 
          display: flex; 
          align-items: center; 
          white-space: nowrap;
        }

        /*Marquee encostada no container azul e final da página */
        .marquee-desktop {
          bottom: -16px; /* ENCOSTADA no final da página */
        }

        /*  AJUSTE: ANIMAÇÃO MAIS PARA CIMA NO MOBILE */
        .marquee-mobile {
          bottom: -12px; 
        }

        /* Acessibilidade */
        @media (prefers-reduced-motion: reduce) {
          .marquee-track, 
          .marquee-mobile__inner { 
            animation: none !important; 
          }
        }
      `}</style>

      {/* Container com padding padrão internacional */}
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        {/* ===== DESKTOP / TABLET ===== */}
        <div className="hidden md:grid grid-cols-12 gap-6 lg:gap-8 xl:gap-12 items-start">
          {/* Título - Coluna esquerda */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="col-span-10 lg:col-span-3 xl:col-span-3 text-left-column"
          >
            <h1
              className="font-extrabold tracking-tight leading-[0.75] lg:leading-[0.88]"
              style={{
                color: "#F0D9D1",
                fontFamily: '"Work Sans", sans-serif',
                fontSize: "clamp(1rem, 4vw, 2.5rem)",
              }}
            >
              Uma viagem <span className="block">para viver</span>
              <span className="block">intensamente!</span>
            </h1>
          </motion.div>

          {/* Imagem central */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="col-span-12 lg:col-span-6 xl:col-span-6 flex justify-center relative z-[10]"
          >
            <div className="hero-image-wrapper">
              <div className="hero-image-container w-full overflow-hidden">
                <img
                  src="/img/italiadesktop.png"
                  alt="Italia Desktop Header"
                  className="w-full h-full object-cover object-center"
                  loading="eager"
                />
              </div>
            </div>
          </motion.div>

          {/* Texto - Coluna direita */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="col-span-12 lg:col-span-3 xl:col-span-3 text-right-column relative z-[20]"
          >
            <p
              className="leading-[1.4] lg:leading-[1.35] m-0"
              style={{
                color: "#F0D9D1",
                fontFamily: '"Roboto Mono", monospace',
                fontSize: "clamp(0.875rem, 1.0vw, 0rem)",
              }}
            >
              Experimente uma pizza autêntica e <br />
              caminhe por ruas históricas! A <br />
              Itália é um destino que combina <br />
              arte, história, boa comida e  <br />
              paisagens de tirar o fôlego. <br />
              <br />
                Conheça <strong> Milão, </strong> com seu estilo <br />
                moderno e vibrante. Vá até <strong> Veneza </strong> <br />
                onde os canais e gôndolas tornam <br />
                qualquer passeio especial. Em  <br />
                <strong> Florença, </strong> a arte e a boa mesa <br />
                convidam para dias tranquilos. <br />
                Enquanto isso, <strong> Roma </strong>vai te<br />
                encantar com sua mistura única de <br />
                história, cultura e energia que só <br />
                a capital italiana. <br />
            </p>
          </motion.div>
        </div>

        {/* ===== MOBILE ===== */}
        <div className="md:hidden space-y-6">
          {/* Header Mobile */}
          <div className="text pt-1">
            <h1
              className="font-extrabold leading-[0.9]"
              style={{
                color: "#F0D9D1",
                fontFamily: '"Work Sans", sans-serif',
                fontSize: "clamp(2.25rem, 8vw, 2.75rem)",
              }}
            >
              Uma viagem <span className="block">para viver</span>
              <span className="block">intensamente!</span>
            </h1>
          </div>

          {/* Texto Mobile */}
          <div className="px-0">
            <p
              className="mt-6"
              style={{
                fontFamily: '"Roboto Mono", monospace',
                fontSize: "clamp(0.75rem, 3.5vw, 0.875rem)",
                lineHeight: 1.4,
                color: "#F0D9D1",
                textAlign: "left",
              }}
            >
              Experimente uma pizza autêntica e <br />
              caminhe por ruas históricas! A <br />
              Itália é um destino que combina <br />
              arte, história, boa comida e  <br />
              paisagens de tirar o fôlego. <br />
              <br />
                Conheça <strong> Milão, </strong> com seu estilo <br />
                moderno e vibrante. Vá até <strong> Veneza </strong> <br />
                onde os canais e gôndolas tornam <br />
                qualquer passeio especial. Em  <br />
                <strong> Florença, </strong> a arte e a boa mesa <br />
                convidam para dias tranquilos. <br />
                Enquanto isso, <strong> Roma </strong>vai te<br />
                encantar com sua mistura única de <br />
                história, cultura e energia que só <br />
                a capital italiana. <br />
            </p>
          </div>

          {/*  IMAGEM MOBILE ENCOSTADA NO FINAL */}
          <div className="mt-0">
            <div className="hero-image-container w-full overflow-hidden">
              <img
                src="/img/italiamobile.png"
                alt="Italia Mobile"
                className="w-full h-full object object-center"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ===== MARQUEE RESPONSIVA ===== */}

      {/* Mobile Marquee */}
      <div
        className="md:hidden pointer-events-none absolute inset-x-2 overflow-hidden z-[30] marquee-mobile"
      >
        <div className="marquee-mobile__inner" aria-hidden="true">
          {[0, 1, 2].map((i) => (
            <div className="marquee-mobile__group" key={i}>
              <span
                className="font-bold leading-none"
                style={{
                  color: "#F0D9D1",
                  fontFamily: '"Work Sans", sans-serif',
                  fontSize: "clamp(2.5rem, 18vw, 4rem)",
                }}
              >
                <strong>
                  ITÁLIA • ITÁLIA • ITÁLIA • ITÁLIA • ITÁLIA • ITÁLIA • ITÁLIA • ITÁLIA • ITÁLIA • ITÁLIA • ITÁLIA • ITÁLIA •
                ITÁLIA • ITÁLIA • ITÁLIA • ITÁLIA • ITÁLIA • ITÁLIA • ITÁLIA • ITÁLIA • ITÁLIA • ITÁLIA • ITÁLIA • ITÁLIA • 
                </strong>
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop Marquee */}
      <div
        className="hidden md:block pointer-events-none absolute inset-x-0 overflow-hidden z-[40] marquee-desktop"
      >
        <div className="marquee-track" aria-hidden="true">
          {[0, 1].map((i) => (
            <span
              key={i}
              className="font-bold leading-none"
              style={{
                color: "#F0D9D1",
                fontFamily: '"Work Sans", sans-serif',
                fontSize: "clamp(2rem, 5vw, 5rem)",
              }}
            >
              <strong>
                ITÁLIA • ITÁLIA • ITÁLIA • ITÁLIA • ITÁLIA • ITÁLIA • ITÁLIA • ITÁLIA • ITÁLIA • ITÁLIA • ITÁLIA • ITÁLIA •
                ITÁLIA • ITÁLIA • ITÁLIA • ITÁLIA • ITÁLIA • ITÁLIA • ITÁLIA • ITÁLIA • ITÁLIA • ITÁLIA • ITÁLIA • ITÁLIA • 
              </strong>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
