import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden pt-16 md:pt-38 pb-0 no-shadows"
      style={{ background: "#F0D9D1" }}
    >
      <style>{`
        /* ZERA QUALQUER SOMBRA DENTRO DO SECTION */
        .no-shadows, .no-shadows * {
          text-shadow: none !important;
          box-shadow: none !important;
          filter: none !important;      /* remove drop-shadow() e afins */
        }

        @keyframes marqueeX { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
        .marquee-track { display:flex; width:200% }
        .marquee-track > span { flex:0 0 50%; white-space:nowrap }

        @keyframes marqueeMobile { 0%{transform:translate3d(0,0,0)} 100%{transform:translate3d(-33.3333%,0,0)} }
        .marquee-mobile__inner { display:flex; width:300%; animation:marqueeMobile 6s linear infinite; will-change:transform; backface-visibility:hidden; transform:translateZ(0) }
        .marquee-mobile__group { flex:0 0 33.3333%; display:flex; align-items:center; white-space:nowrap }
        .marquee-mobile__text { display:inline-block; white-space:nowrap; margin:0; letter-spacing:0; lineHeight:1 }

        @media (prefers-reduced-motion: reduce) {
          .marquee-track, .marquee-mobile__inner { animation:none !important; transform:translateX(0)!important }
        }
      `}</style>

      <div className="container mx-auto max-w-[1320px] px-4 lg:px-2">
        {/* ====== DESKTOP ====== */}
        <div className="hidden md:grid items-center gap-8 lg:gap-8 lg:grid-cols-[300px_1fr_360px] lg:-translate-x-8 xl:-translate-x-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-left md:-mt-32 lg:-mt-22 md:-ml-12 lg:ml-10"
          >
            <h1
              className="!font-extrabold !tracking-tight leading-[0.75] [text-wrap:balance]"
              style={{
                color: "#AC0039",
                fontFamily: '"Work Sans", sans-serif',
                fontSize: "clamp(26px, 4vw, 46px)",
              }}
            >
              Conheça o <span className="block">Deserto do</span>
              <span className="block">Atacama</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative flex justify-center lg:justify-self-center md:mt-6 lg:mt-4"
          >
            <div
              className="overflow-hidden w-full md:w-[645px] md:h-[555px]"
              style={{
                aspectRatio: "865 / 727",
                borderRadius: "220px 220px 0 0",
              }}
            >
              <div
                className="hidden md:block h-full"
                style={{
                  width: "calc(100% + (50vw - 50%))",
                  marginRight: "calc(50% - 50vw)",
                  height: "100%",
                  borderRadius: "220px 220px 0 0",
                  overflow: "hidden",
                }}
              >
                <img
                  src="/img/atacamaimagemheader.png"
                  alt="Deserto do Atacama"
                  className="w-full h-full object-cover object-center"
                  loading="eager"
                  decoding="async"
                  fetchPriority="high"
                />
              </div>
              <img
                src="/img/atacamaimagemheader.png"
                alt="Deserto do Atacama"
                className="md:hidden w-full h-full object-cover object-center"
                loading="eager"
                decoding="async"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-left md:mt-6 lg:mt-8 md:ml-6 lg:ml-10 xl:ml-14"
          >
            <div
              className="text-[15px] font-normal leading-[1.35]"
              style={{
                color: "#222223",
                fontFamily: '"Roboto Mono", monospace',
              }}
            >
              Nosso pacote de viagem leva você a <br />
              explorar um dos destinos mais <br />
              impressionantes da América do Sul. <br />
              Inclui passeios organizados, <br />
              hospedagem confortável e a <br />
              oportunidade de vivenciar de perto <br />
              as paisagens únicas do deserto. <br />
              <br />
              <strong>
                Uma experiência completa para quem <br />
                deseja descobrir o Atacama com <br />
                comodidade. <br />
              </strong>
            </div>
          </motion.div>
        </div>

        {/* ====== MOBILE ====== */}
        <div className="md:hidden -mt-14">
          <h1
            className="font-extrabold leading-[0.80] mt-0"
            style={{
              color: "#AC0039",
              fontFamily: '"Work Sans", sans-serif',
              fontSize: "32px",
            }}
          >
            <strong>
              Conheça o <span className="block">Deserto do</span>
              <span className="block">Atacama</span>
            </strong>
          </h1>

          <div
            className="mt-8"
            style={{
              fontFamily: '"Roboto Mono", monospace',
              fontSize: "10px",
              lineHeight: 1.12,
              letterSpacing: "-0.01em",
              color: "#222223",
              textAlign: "justify",
            }}
          >
            Nosso pacote de viagem leva você a explorar <br />
            um dos destinos mais impressionantes <br />
            da América do Sul. Inclui passeios <br />
            organizados, hospedagem confortável <br />
            e a oportunidade de vivenciar de perto <br />
            as paisagens únicas do deserto.
            <br />
            <br />
            <strong>
              Uma experiência completa para quem deseja <br />
              descobrir o Atacama com comodidade.
            </strong>
          </div>

          {/* APENAS A IMAGEM DESCE - AJUSTADO PARA ENCOSTAR NO FINAL */}
          <div className="mt-2 relative">
            <div
              className="overflow-hidden w-full max-w-full mx-auto will-change-transform"
              style={{
                aspectRatio: "865 / 910",
                borderTopLeftRadius: 120,
                borderTopRightRadius: 120,
                borderBottomLeftRadius: 0,
                borderBottomRightRadius: 0,
                marginLeft: '-0rem',
                marginRight: '-1rem',
                zIndex: 20,
                maxHeight: "380px",
              }}
            >
              <img
                src="/img/atacamaimagemmobile.png"
                alt="Atacama"
                className="w-full h-full object-cover object-center"
                style={{ 
                  objectPosition: "center 25%"
                }}
                loading="eager"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ====== FAIXA MARQUEE — MOBILE ====== */}
      <div className="relative z-30 md:hidden -mt-16 -mb-4 py-0 overflow-hidden pointer-events-none">
        <div className="marquee-mobile__inner" aria-hidden="true">
          <div className="marquee-mobile__group">
            <span
              className="marquee-mobile__text font-bold leading-none"
              style={{
                color: "#A0D3F1",
                fontFamily: '"Work Sans", sans-serif',
                fontSize: "80px",
              }}
            >
              <strong>
                ATACAMA • ATACAMA • ATACAMA • ATACAMA • ATACAMA • ATACAMA •
                ATACAMA • ATACAMA •
              </strong>
            </span>
          </div>
          <div className="marquee-mobile__group" aria-hidden>
            <span
              className="marquee-mobile__text font-bold leading-none"
              style={{
                color: "#A0D3F1",
                fontFamily: '"Work Sans", sans-serif',
                fontSize: "80px",
              }}
            >
              <strong>
                ATACAMA • ATACAMA • ATACAMA • ATACAMA • ATACAMA • ATACAMA •
                ATACAMA • ATACAMA •
              </strong>
            </span>
          </div>
          <div className="marquee-mobile__group" aria-hidden>
            <span
              className="marquee-mobile__text font-bold leading-none"
              style={{
                color: "#A0D3F1",
                fontFamily: '"Work Sans", sans-serif',
                fontSize: "80px",
              }}
            >
              <strong>
                ATACAMA • ATACAMA • ATACAMA • ATACAMA • ATACAMA • ATACAMA •
                ATACAMA • ATACAMA •
              </strong>
            </span>
          </div>
        </div>
      </div>

      {/* ====== FAIXA MARQUEE — DESKTOP ====== */}
      <div className="relative z-50 hidden md:block -mt-24 -mb-0 py-0 overflow-hidden pointer-events-none">
        <div
          className="marquee-track"
          style={{ animation: "marqueeX 14s linear infinite" }}
          aria-hidden="true"
        >
          <span
            className="font-bold leading-none"
            style={{
              color: "#A0D3F1",
              fontFamily: '"Work Sans", sans-serif',
              fontSize: "clamp(34px, 5.2vw, 94px)",
            }}
          >
            <strong>
              ATACAMA • ATACAMA • ATACAMA • ATACAMA • ATACAMA • ATACAMA •
              ATACAMA • ATACAMA •
            </strong>
          </span>
          <span
            className="font-bold leading-none"
            aria-hidden
            style={{
              color: "#A0D3F1",
              fontFamily: '"Work Sans", sans-serif',
              fontSize: "clamp(34px, 5.2vw, 94px)",
            }}
          >
            <strong>
              ATACAMA • ATACAMA • ATACAMA • ATACAMA • ATACAMA • ATACAMA •
              ATACAMA • ATACAMA •
            </strong>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;