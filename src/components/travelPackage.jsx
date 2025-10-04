import React from "react";
import { motion } from "framer-motion";

/* ===== animações ===== */
const SPEED = 0.7;
const rowVariants = (fromLeft) => ({
  hidden: { opacity: 0, x: fromLeft ? -180 : 180 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      type: "tween",
      ease: [0.22, 1, 0.36, 1],
      duration: 0.6 * SPEED,
      delayChildren: 0.12 * SPEED,
      staggerChildren: 0.1 * SPEED,
    },
  },
});
const itemVariants = (fromLeft) => ({
  hidden: { opacity: 0, x: fromLeft ? -90 : 90, scale: 0.98 },
  show: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { type: "tween", ease: [0.22, 1, 0.36, 1], duration: 0.5 * SPEED },
  },
});

/* ===== dados (ITÁLIA) ===== */
const days = [
  { day: "1º AO 3º DIA", subtitle: "Milão", body: "Uma cidade que é puro astral! Você vai adorar! Moda, design, cafés estilosos e uma energia urbana que contagia. Um lugar para quem quer viver a Itália moderna sem abrir mão de história e cultura.", image: "/img/beneficios/primeiroaoterceirodiaitalia.png" },
  { day: "3º DIA", subtitle: "Trem para Veneza", body: "Vamos de Trem para Veneza", image: "/img/beneficios/terceirodiaitalia.png" },
  { day: "3º AO 5º DIA", subtitle: "Veneza", body: "Veneza é única: canais que viram ruas, gôndolas cruzando a cidade e praças cheias de vida. Um destino para se perder nas vielas e descobrir a magia em cada esquina.", image: "/img/beneficios/terceiroaoquintodiaitalia.png" },
  { day: "5º DIA", subtitle: "Trem para Florença", body: "Vamos de Trem para Florença", image: "/img/beneficios/quintodiaitalia.png" },
  { day: "5º AO 8º DIA", subtitle: "Florença", body: "Florença é charme em cada detalhe: praças\ncheias de arte, ruas perfeitas para caminhar\nsem pressa e uma culinária que conquista a cada\nprato. Um convite para viver a Itália de forma\nautêntica!", image: "/img/beneficios/quintoaooitavodiaitalia.png" },
  { day: "8º DIA", subtitle: "Trem para Roma", body: "Vamos de Trem para Roma", image: "/img/beneficios/oitavodiaitalia.png" },
  { day: "8º AO 12º DIA", subtitle: "Conheça Roma", body: "História viva bem na sua frente! Os monumentos\nsão grandiosos, as ruas cheias de vida e os\nsabores marcam a memória. Cada esquina revela\nalgo novo, em uma cidade que nunca perde o\nencanto.", image: "/img/beneficios/oitavoaodecimosegundodiaitalia.png" },
  { day: "12º DIA", subtitle: "Retorno ao Brasil", body: "Retornamos ao Brasil", image: "/img/beneficios/decimosegundodiaitalia.png" },
];

/* ===== tamanhos dos balões (desktop) — IGUAIS ===== */
const BALLOON_SIZE = [
  { w: 750, h: 200 },
  { w: 736, h: 130 },
  { w: 800, h: 200 },
  { w: 738, h: 130 },
  { w: 736, h: 200 },
  { w: 738, h: 130 },
  { w: 780, h: 200 },
  { w: 736, h: 130 },
];

const OVERLAP_PX = 84;
const NEED_EXTRA_PADDING = new Set([0, 2, 4, 6]); // fotos à esquerda
const TITLE_ALIGN_LEFT = new Set([0, 1, 2, 3, 4, 5, 6, 7]);

/* offsets padrão para aproximar texto do centro */
const TITLE_OFFSET_NEAR = 100;
const BALLOON_TEXT_OFFSET_NEAR = 80;

/* “nudges” finos por card (mantém layout) */
const TITLE_EXTRA_NUDGE = { 1: 28, 2: 24 };
const INNER_LEFT_EXTRA = { 1: 20, 2: 22 };

/* ===== estilos ===== */
const TEXT_STYLES = {
  title: (i) => {
    const isMidRange = i >= 1 && i <= 6;
    return {
      fontSize: isMidRange ? "64px" : "60px",
      lineHeight: 0.62,
      letterSpacing: "-0.06em",
      marginBottom: isMidRange ? "3px" : "0px",
    };
  },
  subtitle: () => ({
    fontSize: "30px",
    lineHeight: 1.1,
    marginBottom: "16px",
  }),
  body: () => ({
    fontSize: "15px",
    lineHeight: 1.18,
    letterSpacing: "-0.01em",
  }),
  balloonPadding: (i) => {
    const isRange = i >= 0 && i <= 6;
    return {
      paddingTop: isRange ? "18px" : "24px",
      paddingBottom: isRange ? "16px" : "24px",
    };
  },
};

export default function TravelPackage() {
  return (
    <section className="relative overflow-visible py-16 md:py-20" style={{ backgroundColor: "#A0D3F1" }}>
      {/* faixa clara decorativa à esquerda */}
      <div aria-hidden className="absolute top-0 left-0 h-full" style={{ width: 8, background: "rgba(255,255,255,0.35)" }} />

      <div className="container mx-auto max-w-[1320px] px-4 md:px-6">
        {/* ====== CABEÇALHO + IMAGEM ==== */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="text-center mb-20 md:mb-28">
          <div className="flex items-center justify-center gap-4 mb-0">
            <img src="/img/beneficios/location2.png" alt="Ícone Nosso Pacote" className="w-16 h-16 md:w-16 md:h-16 object-contain" loading="lazy" decoding="async" />
            <h2
              className="font-extrabold text-[40px] md:text-[65px]"
              style={{ color: "#FD4F0D", fontFamily: '"Work Sans", sans-serif', lineHeight: 0.9, letterSpacing: "-0.02em" }}
            >
              <strong>Nosso Pacote</strong>
            </h2>
          </div>

          {/* imagem centralizada abaixo do título */}
          <div className="mt-5 mb-12 md:mb-20 flex justify-center">
            <div className="mx-auto inline-block w-full max-w-[540px] md:w-[540px] md:h-[907px]">
              <img src="/img/videoitalia.png" alt="Vídeo/Imagem – Itália" className="w-full h-auto md:h-full md:w-full object-cover md:rounded-[18px]" style={{ borderRadius: 100 }} />
            </div>
          </div>
        </motion.div>
        {/* ====== /CABEÇALHO ====== */}

        {/* ================= DESKTOP ================= */}
        <div className="hidden md:block">
          <div className="space-y-20">
            {days.map((d, i) => {
              const imageLeft = i % 2 === 0;
              const fromLeft = imageLeft;
              const { w, h } = BALLOON_SIZE[i];

              let padLeft = 24;
              let padRight = 28;
              if (imageLeft && NEED_EXTRA_PADDING.has(i)) padLeft = 24 + OVERLAP_PX;

              const titleS = TEXT_STYLES.title(i);
              const subS = TEXT_STYLES.subtitle(i);
              const bodyS = TEXT_STYLES.body(i);
              const padS = TEXT_STYLES.balloonPadding(i);

              let titleMarginLeft = TITLE_ALIGN_LEFT.has(i) ? TITLE_OFFSET_NEAR : 0;
              let balloonPaddingLeftPx = TITLE_ALIGN_LEFT.has(i) ? BALLOON_TEXT_OFFSET_NEAR : 0;

              titleMarginLeft += TITLE_EXTRA_NUDGE[i] ?? 0;
              balloonPaddingLeftPx += INNER_LEFT_EXTRA[i] ?? 0;

              const isLast = i === days.length - 1;

              return (
                <motion.div
                  key={`desk-${d.day}`}
                  variants={rowVariants(fromLeft)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, amount: 0.45, margin: "-10% 0px -10% 0px" }}
                  className={`relative flex flex-col items-center gap-10 ${imageLeft ? "lg:flex-row" : "lg:flex-row-reverse"}`}
                >
                  {/* Imagem */}
                  <motion.div variants={itemVariants(fromLeft)} className="relative z-20 w-full max-w-[560px] h-[410px] rounded-[28px] overflow-hidden shadow-2xl">
                    <img src={d.image} alt={d.subtitle} className="w-full h-full object-cover" />
                  </motion.div>

                  {/* Título + Balão */}
                  <motion.div variants={itemVariants(fromLeft)} className="relative z-10 w-full" style={{ maxWidth: Math.max(w + OVERLAP_PX, 760) }}>
                    <div
                      className="font-extrabold"
                      style={{ color: "#FD4F0D", fontFamily: '"Work Sans", sans-serif', ...titleS, marginLeft: titleMarginLeft }}
                    >
                      {d.day}
                    </div>

                    <div
                      className="shadow-xl"
                      style={{
                        backgroundColor: "#F9F2E1",
                        width: `${w}px`,
                        minHeight: `${h}px`,
                        borderRadius: "12px",
                        paddingLeft: `${padLeft + balloonPaddingLeftPx}px`,
                        paddingRight: `${padRight}px`,
                        ...padS,
                        marginLeft: imageLeft ? `-${OVERLAP_PX}px` : 0,
                        marginRight: imageLeft ? 0 : `-${OVERLAP_PX}px`,
                      }}
                    >
                      <h3
                        className="font-extrabold"
                        style={{
                          color: "#FD4F0D",
                          fontFamily: '"Work Sans", sans-serif',
                          letterSpacing: "-0.01em",
                          display: "inline-block",
                          ...subS,
                        }}
                      >
                        {d.subtitle}
                      </h3>

                      <p
                        style={{
                          color: "#222223",
                          fontFamily: '"Roboto Mono", monospace',
                          textAlign: "left",
                          whiteSpace: "pre-line",
                          ...bodyS,
                        }}
                      >
                        {d.body}
                      </p>
                    </div>

                    {/* Aviso após o 12º DIA (desktop) */}
                    {isLast && (
                      <p
                        className="mt-3"
                        style={{
                          fontFamily: '"Roboto Mono", monospace',
                          fontWeight: 700,
                          fontSize: 12,
                          color: "#222223",
                        }}
                      >
                        *O roteiro pode começar em Roma e terminar em Milão
                      </p>
                    )}
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ================= MOBILE ================= */}
        <div className="md:hidden">
          <div className="flex flex-col items-center gap-10">
            {days.map((d, i) => {
              const isLast = i === days.length - 1;
              return (
                <motion.div
                  key={`mob-${d.day}`}
                  variants={rowVariants(true)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.35 }}
                  className="w-full flex flex-col items-center"
                >
                  <div
                    className="font-extrabold text-center"
                    style={{
                      color: "#FD4F0D",
                      fontFamily: '"Work Sans", sans-serif',
                      fontSize: "40px",
                      lineHeight: 0.9,
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {d.day}
                  </div>

                  <div className="relative w-[340px]">
                    <div className="absolute top-0 left-0 right-0 h-[252px] rounded-[20px] overflow-hidden shadow-xl z-20">
                      <img src={d.image} alt={d.subtitle} className="w-full h-full object-cover" />
                    </div>

                    <div className="relative z-10 rounded-[20px] shadow-md px-6 pt-20 pb-5 mt-[210px]" style={{ backgroundColor: "#F9F2E1" }}>
                      {/* AQUI aumentamos só no mobile */}
                      <h3
                        className="font-extrabold mb-3"
                        style={{
                          color: "#FD4F0D",
                          fontFamily: '"Work Sans", sans-serif',
                          fontSize: "clamp(30px, 6vw, 28px)", // antes era "20px"
                          lineHeight: 1,
                          letterSpacing: "-0.05em",
                        }}
                      >
                        {d.subtitle}
                      </h3>
                      <p
                        style={{
                          color: "#222223",
                          fontFamily: '"Roboto Mono", monospace',
                          fontSize: "13px",
                          lineHeight: 1.16,
                          letterSpacing: "-0.01em",
                          textAlign: "left",
                          whiteSpace: "pre-line",
                        }}
                      >
                        {d.body}
                      </p>
                    </div>
                  </div>

                  {/* Aviso no mobile */}
                  {isLast && (
                    <p
                      className="mt-2 w-full px-3 text-left"
                      style={{
                        fontFamily: '"Roboto Mono", monospace',
                        fontWeight: 700,
                        fontSize: 12,
                        color: "#222223",
                      }}
                    >
                      *O roteiro pode começar em Roma e terminar em Milão
                    </p>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
