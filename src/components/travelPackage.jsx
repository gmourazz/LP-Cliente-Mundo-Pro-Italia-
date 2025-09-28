import React from 'react';
import { motion } from 'framer-motion';

const SPEED = 0.7;
const rowVariants = (fromLeft) => ({
  hidden: { opacity: 0, x: fromLeft ? -180 : 180 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'tween',
      ease: [0.22, 1, 0.36, 1],
      duration: 0.6 * SPEED,
      delayChildren: 0.12 * SPEED,
      staggerChildren: 0.10 * SPEED,
    },
  },
});
const itemVariants = (fromLeft) => ({
  hidden: { opacity: 0, x: fromLeft ? -90 : 90, scale: 0.98 },
  show: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { type: 'tween', ease: [0.22, 1, 0.36, 1], duration: 0.5 * SPEED },
  },
});

const days = [
  {
    day: '1º DIA',
    subtitle: 'Dia de chegada em Calama. Dia Livre.',
    body: `Transfer até o hotel e dia livre em San Pedro.`,
    image: '/img/beneficios/primeirodia.png',
  },
  {
    day: '2º DIA',
    subtitle: 'Vallecito',
    body: `Pela tarde, visita ao Vallecito.\nO passeio inclui guia, transporte e piquenique.`,
    image: '/img/beneficios/segundodia.png',
  },
  {
    day: '3º DIA',
    subtitle: 'Lagunas Escondidas De Baltinache (de manhã) e Tour Astronômico (à noite)',
    body: `O passeio leva você a um conjunto de sete lagoas de águas salgadas, com tons azuis transparentes e margens de sal branco. Em duas delas, é possível banho, e a alta concentração de sal permite flutuar com facilidade. O pacote inclui guia, transporte e piquenique. À noite, uma experiência especial permite observar planetas, constelações e fenômenos celestes com telescópios, acompanhados por astrônomos locais, tornando a visita ainda mais memorável.`,
    image: '/img/beneficios/terceirodia.png',
  },
  {
    day: '4º DIA',
    subtitle: 'Piedras Rojas e Lagunas Altiplânicas',
    body: `São dois dos grandes atrativos da região dos Andes. Envolve um pouco de altitude (4260 metros), mas vale muito a pena. O passeio inclui guia, transporte, café da manhã e almoço`,
    image: '/img/beneficios/quartodia.png',
  },
  {
    day: '5º DIA',
    subtitle: 'Geysers el tatio (opcional)',
    body: `A intensa atividade vulcânica do Chile torna comum encontrar águas termais na região, mas o Atacama guarda um fenômeno único: o Geyser del Tatio. Um espetáculo natural impressionante que merece ser incluído em sua viagem, oferecendo uma experiência singular no deserto.`,
    image: '/img/beneficios/quintodia.png',
  },
  {
    day: '6º DIA',
    subtitle: 'San Pedro - Calama',
    body: `Transfer para o aeroporto e partida.`,
    image: '/img/beneficios/sextodia.png',
  },
];

/* Tamanhos (W×H) por dia */
const balloonSize = [
  { w: 736, h: 119 }, // 1º
  { w: 736, h: 137 }, // 2º
  { w: 736, h: 318 }, // 3º
  { w: 738, h: 225 }, // 4º
  { w: 736, h: 266 }, // 5º
  { w: 738, h: 160 }, // 6º
];

/* ====== PASSEIOS OPCIONAIS ====== */
const optionalTours = [
  'Geyser el tatio - R$ 435 por pessoa',
  'Cerro Toco - R$ 623 por pessoa',
  'Vulcão Lascar - R$ 1059 por pessoa',
  'Valle de la Luna - R$ 346 por pessoa',
  'Laguna Cejar - R$ 435 por pessoa',
  'Termas de Puritama - R$199 por pessoa (Não inclui o ingresso das termas)',
  'Valle del Arco íris - R$ 269 por pessoa (Não inclui o ingresso)',
  'Rota dos Salares - R$ 387 por pessoa',
  'Salar do Uyuni - Confira o valor por pessoa',
];

export default function TravelPackage() {
  return (
    <section className="py-8" style={{ backgroundColor: '#F2EA86' }}>
      <div className="container mx-auto max-w-[1320px] px-2">
        {/* Cabeçalho */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center mb-10"
        >
          <div className="flex items-center justify-center gap-4 mb-0">
            <img
              src="/img/beneficios/location2.png"
              alt="Ícone Nosso Pacote"
              className="w-16 h-16 md:w-16 md:h-16 object-contain"
              loading="lazy"
              decoding="async"
            />
            <h2
              className="font-extrabold text-[30px] md:text-[65px]"
              style={{
                color: '#FD4F0D',
                fontFamily: '"Work Sans", sans-serif',
                lineHeight: 0.9,
                letterSpacing: '-0.02em',
              }}
            >
              <strong>Nosso Pacote</strong>
            </h2>
          </div>

          {/* Intro desktop */}
          <div className="hidden md:block mt-3">
            <p
              className="max-w-4xl mx-auto text-[15px]"
              style={{
                color: '#222223',
                fontFamily: '"Roboto Mono", monospace',
                fontWeight: 400,
                lineHeight: 1.15,
                letterSpacing: '-0.01em',
              }}
            >
              Nosso roteiro foi planejado para que você conheça os principais atrativos da <br />
              região, combinando paisagens impressionantes e experiências autênticas da cultura <br />
              local. Uma viagem organizada, com hospedagem confortável e passeios que tornam a <br />
              experiência no Atacama ainda mais especial.<br />
            </p>
            <br />
            <p
              className="font-bold text-[18px]"
              style={{
                color: '#222223',
                fontFamily: '"Work Sans", monospace',
                lineHeight: 1.08,
                letterSpacing: '-0.01em',
              }}
            >
              <strong>
                Este é apenas um roteiro sugestão: os passeios podem ser incluídos, alterados ou <br />
                adaptados conforme o interesse do viajante.
              </strong>
            </p>
          </div>

          {/* Intro mobile */}
          <div className="block md:hidden mt-3">
            <p
              className="max-w-[95%] mx-auto text-[10px]"
              style={{
                color: '#222223',
                fontFamily: '"Roboto Mono", monospace',
                fontWeight: 400,
                lineHeight: 1.2,
                letterSpacing: '-0.01em',
              }}
            >
              Nosso roteiro foi planejado para que você <br />
              conheça os principais atrativos da região, <br />
              combinando paisagens impressionantes e experiências autênticas da cultura local.
              Uma viagem organizada, com hospedagem confortável e passeios que tornam a experiência
              no Atacama ainda mais especial.
            </p>

            <p
              className="mt-4 font-bold text-[10px]"
              style={{
                color: '#222223',
                fontFamily: '"Work Sans", monospace',
                lineHeight: 1.18,
                letterSpacing: '-0.01em',
              }}
            >
              Este é apenas um roteiro sugestão: os passeios podem ser incluídos, alterados ou
              adaptados conforme o interesse do viajante.
            </p>
          </div>
        </motion.div>

        {/* ================= DESKTOP ================= */}
        <div className="hidden md:block">
          <div className="space-y-16">
            {days.map((d, i) => {
              const imageLeft = i % 2 === 0;
              const fromLeft = imageLeft;
              const { w, h } = balloonSize[i];

              return (
                <motion.div
                  key={`desk-${d.day}`}
                  variants={rowVariants(fromLeft)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, amount: 0.45, margin: '-10% 0px -10% 0px' }}
                  className={`relative flex flex-col items-center gap-8 lg:gap-10 ${imageLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                >
                  {/* IMAGEM */}
                  <motion.div
                    variants={itemVariants(fromLeft)}
                    className="relative z-20 w-full max-w-[550px] h-[400px] rounded-[24px] overflow-hidden shadow-2xl"
                  >
                    <img src={d.image} alt={d.subtitle} className="w-full h-full object-cover" />
                  </motion.div>

                  {/* TÍTULO + BALÃO (sempre com o mesmo alinhamento do Dia 1) */}
                  <motion.div variants={itemVariants(fromLeft)} className="relative z-10 w-full">
                    <div className={imageLeft ? 'lg:-ml-[48px]' : 'lg:-mr-[48px]'}>
                      {/* Título com a MESMA largura e padding do balão */}
                      <div style={{ width: w }} className="px-6">
                        <div
                          className="font-extrabold mb-3"
                          style={{
                            color: '#FD4F0D',
                            fontSize: '56px',
                            fontFamily: '"Work Sans", sans-serif',
                            lineHeight: 1,
                            letterSpacing: '-0.02em',
                          }}
                        >
                          {d.day}
                        </div>
                      </div>

                      {/* Balão com tamanho específico por dia */}
                      <div
                        className="rounded-[18px] shadow-xl flex items-center"
                        style={{
                          backgroundColor: '#F9F2E1',
                          width: w,
                          height: h,
                        }}
                      >
                        <div className="px-6 w-full">
                          <h3
                            className="font-extrabold"
                            style={{
                              color: '#FD4F0D',
                              fontSize: 26,
                              fontFamily: '"Work Sans", sans-serif',
                              lineHeight: 1,
                              letterSpacing: '-0.015em',
                              marginBottom: 6,
                            }}
                          >
                            {d.subtitle}
                          </h3>
                          <p
                            style={{
                              color: '#222223',
                              fontSize: 15,
                              fontFamily: '"Roboto Mono", monospace',
                              fontWeight: 400,
                              lineHeight: 1.35,
                              letterSpacing: '0.1px',
                              whiteSpace: 'pre-line', // preserva \n
                            }}
                          >
                            {d.body}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ================= MOBILE ================= */}
        <div className="md:hidden">
          <div className="flex flex-col items-center gap-6">
            {days.map((d) => (
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
                    color: '#FD4F0D',
                    fontFamily: '"Work Sans", sans-serif',
                    fontSize: '45px',
                    lineHeight: 0.9,
                    letterSpacing: '-0.02em',
                  }}
                >
                  {d.day}
                </div>

                <div className="relative w-[330px]">
                  <div className="absolute top-0 left-0 right-0 h-[240px] rounded-[16px] overflow-hidden shadow-xl z-20">
                    <img src={d.image} alt={d.subtitle} className="w-full h-full object-cover" />
                  </div>

                  <div
                    className="relative z-10 rounded-[18px] shadow-md px-4 pt-16 pb-4 mt-[200px]"
                    style={{ backgroundColor: '#F9F2E1' }}
                  >
                    <h3
                      className="font-extrabold mb-2"
                      style={{
                        color: '#FD4F0D',
                        fontFamily: '"Work Sans", sans-serif',
                        fontSize: '18px',
                        lineHeight: 0.95,
                        letterSpacing: '-0.015em',
                      }}
                    >
                      {d.subtitle}
                    </h3>
                    <p
                      style={{
                        color: '#222223',
                        fontFamily: '"Roboto Mono", monospace',
                        fontWeight: 400,
                        fontSize: '12px',
                        lineHeight: 1.12,
                        letterSpacing: '-0.01em',
                        textAlign: 'left',
                        whiteSpace: 'pre-line',
                      }}
                    >
                      {d.body}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ========= PASSEIOS OPCIONAIS ========= */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.45 }}
          className="mt-20"
        >
          <h3
            className="text-center font-extrabold mb-6 text-[45px] md:text-[60px]"
            style={{
              color: '#FD4F0D',
              fontFamily: '"Work Sans", sans-serif',
              lineHeight: 0.9,
              letterSpacing: '-0.02em',
            }}
          >
            <strong>Passeios Opcionais</strong>
          </h3>

          <div
            className="mx-auto rounded-3xl shadow-xl"
            style={{ maxWidth: 680, backgroundColor: '#F9F2E1' }}
          >
            <div className="px-8 py-6">
              <ul className="space-y-1">
                {optionalTours.map((t, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <img
                      src="/img/beneficios/localizacao.png"
                      alt="Localização"
                      className="mt-[0px] w-4 h-4 object-contain"
                      loading="lazy"
                      decoding="async"
                    />
                    <span
                      className="text-[13px] md:text-[18px]"
                      style={{
                        color: '#222223',
                        fontFamily: '"Work Sans", sans-serif',
                        fontWeight: 800,
                        lineHeight: 1.15,
                        letterSpacing: '-0.01em',
                        textAlign: 'left',
                      }}
                    >
                      {t}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
