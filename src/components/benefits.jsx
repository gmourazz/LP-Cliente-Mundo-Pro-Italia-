import React from "react";
import { motion } from "framer-motion";

/* ========= Cores ========= */
const ORANGE = "#FD4F0D";
const ORANGE_SOFT = "rgba(253, 79, 13, 0.6)";

/* ========= Animações ========= */
const popIn = {
  hidden: { opacity: 0, y: 20 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.06 },
  }),
};

const gridVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, when: "beforeChildren" } },
};

const hoverFx = { y: -6, scale: 1.02 };
const tapFx = { scale: 0.98 };

/* ========= Card Amarelo ========= */
const Card = ({ item, index, className = "" }) => {
  return (
    <motion.div
      variants={popIn}
      initial="hidden"
      whileInView="show"
      custom={index}
      viewport={{ once: true, margin: "-60px" }}
      whileHover={hoverFx}
      whileTap={tapFx}
      className={`w-[320px] p-4 text-center flex flex-col items-center h-[220px] md:w-[344px] md:h-[240px] md:p-4 ${className}`}
      style={{
        backgroundColor: "#F2EA86",
        borderRadius: "16px",
        border: "1px solid #E5E7EB",
      }}
    >
      <div className="mb-2 md:mb-2">
        {item.iconSrc && (
          <img
            src={item.iconSrc}
            alt={typeof item.title === "string" ? item.title : "benefício"}
            className="w-11 h-11 md:w-14 md:h-10 object-contain"
          />
        )}
      </div>

      <h3
        className="mb-3 font-extrabold text-[30px] leading-[1.05]"
        style={{ color: ORANGE, fontFamily: '"Work Sans", sans-serif' }}
      >
        {item.title}
      </h3>

      <p
        className="text-[12px] leading-[1.15] md:text-[12px] md:leading-[1.18]"
        style={{ color: "#222223", fontFamily: '"Roboto Mono", monospace' }}
      >
        {item.description}
      </p>
    </motion.div>
  );
};

const Benefits = () => {
  /* ======= Itens ======= */
  const items = {
    passagem: {
      id: "passagem",
      iconSrc: "/img/beneficios/passagem-aerea.png",
      title: (
        <>
          Passagem <br /> Aérea
        </>
      ),
      description: (
        <>
          Brasil / Europa / Brasil
          <br />
          Saídas de:
          <br />
          POA/GRU/CWB/FLN/CGR/CGB/CNF
        </>
      ),
    },

    hospedagem: {
      id: "hospedagem",
      iconSrc: "/img/beneficios/hospedagem.png",
      title: "Hospedagem",
      description: (
        <>
          2 noites em Milão sem café da manhã,<br />
          2 noites em Veneza sem café da manhã,<br />
          3 noites em Florença sem café da manhã,<br />
          4 noites em Roma com café da manhã
        </>
      ),
    },

    assistencia: {
      id: "assistencia",
      iconSrc: "/img/beneficios/assistencia.png",
      title: "Assistência",
      description: (
        <>
          Acompanhamento pré-viagem
          <br />
          e durante a viagem 24h.
        </>
      ),
    },

    franquia: {
      id: "franquia",
      iconSrc: "/img/beneficios/bagagem.png",
      title: (
        <>
          Franquia de <br /> Bagagem
        </>
      ),
      description: (
        <>
          1 item pessoal
          <br />
          1 bagagem de mão até 10kg
          <br />
          1 bagagem despachada até 23kg
        </>
      ),
    },

    semPreocupacao: {
      id: "semPreocupacao",
      iconSrc: "/img/beneficios/sem-preocupacao.png",
      title: (
        <>
          Viaje sem <br /> Preocupação
        </>
      ),
      description: (
        <>
          Preenchimento de formulários
          <br />
          necessários é conosco.
        </>
      ),
    },

    transfer: {
      id: "Transfer",
      iconSrc: "/img/trens.png",
      title: "Transfer",
      description: (
        <>
          De Milão a Veneza,
          <br />
          Veneza a Florença e
          <br />
          Florença a Roma
        </>
      ),
    },

    roteiro: {
      id: "roteiro",
      iconSrc: "/img/mapinhadois.png",
      title: "Roteiro",
      description: (
        <>
          <strong>Feito sob medida</strong> para você
          <br />
          aproveitar ao máximo a viagem.
        </>
      ),
    },
  };

  /* ======= Ordem final (7 balões) ======= */
  const benefitsOrdered = [
    items.passagem,
    items.hospedagem,
    items.assistencia,
    items.franquia,
    items.semPreocupacao,
    items.transfer,
    items.roteiro, // sozinho embaixo
  ];

  return (
    <section
      id="viagem"
      className="py-10 md:py-20 no-shadows"
      style={{ backgroundColor: "#F0D9D1", fontFamily: '"Roboto Mono", monospace' }}
    >
      <style>{`
        .no-shadows, .no-shadows * { box-shadow: none !important; text-shadow: none !important; filter: none !important; }
        .rounded-image { border-radius: 18px; }
      `}</style>

      <div className="container">
        {/* ✅ Linha laranja superior (mantida) */}
        <div className="flex justify-center mb-10">
          <div
            style={{
              width: 1250,
              maxWidth: "100%",
              height: 2,
              backgroundColor: "rgba(253, 79, 13, 0.4)",
              borderRadius: 2,
            }}
          />
        </div>

        {/* TÍTULO + SUBTÍTULO */}
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="text-center text-[45px] md:text-[55px] mt-2"
          style={{ color: ORANGE, fontFamily: '"Work Sans", sans-serif', fontWeight: 800, lineHeight: 1.02 }}
        >
          <strong>Viaje com a Mundo Pró!</strong>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.05 }}
          className="hidden md:block mt-4 mb-10 text-center text-[20px]"
          style={{ color: "#222223", fontFamily: '"Roboto Mono", monospace', lineHeight: 1.35 }}
        >
          <p>Confira o que preparamos para você.</p>
        </motion.div>

        {/* Subtítulo Mobile */}
        <div
          className="block md:hidden mt-3 mb-8 text-center text-[12px]"
          style={{ color: "#222223", fontFamily: '"Roboto Mono", monospace', lineHeight: 1.35 }}
        >
          <p>Passeios, hospedagem e facilidades</p>
          <p>para curtir sem preocupação.</p>
        </div>

        {/* Grade dos 7 balões amarelos */}
        <motion.div
          variants={gridVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-[1040px] mx-auto grid grid-cols-1 md:grid-cols-3 justify-items-center md:justify-items-stretch gap-x-10 md:gap-x-10 gap-y-8 md:gap-y-6 mb-10"
        >
          {benefitsOrdered.map((item, i) => {
            const isLast = i === benefitsOrdered.length - 1;
            const extra = isLast ? "md:col-span-3 place-self-center" : "";
            return <Card key={item.id} item={item} index={i} className={extra} />;
          })}
        </motion.div>

        {/* ❌ Linha divisória após os cards — removida conforme pedido */}

        {/* TÍTULO + SUBTÍTULO antes do "Pacote Não Inclui" */}
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="text-center text-[45px] md:text-[55px] mt-2"
          style={{ color: ORANGE, fontFamily: '"Work Sans", sans-serif', fontWeight: 800, lineHeight: 1.02 }}
        >
          <strong>Não é Viagem em Grupo!</strong>
        </motion.h3>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.05 }}
          className="hidden md:block mt-4 mb-8 text-center text-[20px]"
          style={{ color: "#222223", fontFamily: '"Roboto Mono", monospace', lineHeight: 1.35 }}
        >
          <p> Dia a dia <strong> personalizado,</strong> com dicas e atrações </p>
        </motion.div>

        <div
          className="block md:hidden mt-3 mb-6 text-center text-[12px]"
          style={{ color: "#222223", fontFamily: '"Roboto Mono", monospace', lineHeight: 1.35 }}
        >
          <p> Dia a dia <strong> personalizado,</strong> com dicas e atrações </p>
        </div>

        {/* ===== Pacote Não Inclui ===== */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h3
            className="mb-4 md:mb-2"
            style={{
              color: "#AC0039",
              fontFamily: '"Work Sans", sans-serif',
              fontWeight: 800,
              fontSize: 35,
              lineHeight: 1.85,
            }}
          >
            Pacote Não Inclui
          </h3>

          {/* 3 balões vermelhos lado a lado */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-20 justify-center items-center max-w-5xl mx-auto">
            {[
              { text: "Passeios não descritos", iconSrc: "/img/beneficios/padlock.png" },
              { text: "Demais serviços", iconSrc: "/img/beneficios/padlock.png" },
              { text: "Tranfer", iconSrc: "/img/beneficios/padlock.png" },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={popIn}
                initial="hidden"
                whileInView="show"
                custom={index}
                viewport={{ once: true, margin: "-60px" }}
                whileHover={hoverFx}
                whileTap={tapFx}
                className="flex items-center justify-start text-left"
                style={{
                  width: "320px",
                  height: "120px",
                  backgroundColor: "#AC0039",
                  borderRadius: "16px",
                  padding: "24px",
                  border: "1px solid rgba(0,0,0,0.1)",
                }}
              >
                <div className="flex items-center gap-2.5 md:gap-6 w-full">
                  <img src={item.iconSrc} alt="" className="w-10 h-10 md:w-12 md:h-12 object-contain" />
                  <p
                    className="tracking-[-0.01em]"
                    style={{
                      color: "#F9F2E1",
                      fontFamily: '"Work Sans", sans-serif',
                      fontWeight: 800,
                      fontSize: 20,
                      lineHeight: 1.15,
                    }}
                  >
                    {item.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;
