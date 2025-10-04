import React from "react";
import { motion } from "framer-motion";

/* ====== HOTÉIS (4 cards) ====== */
const hotels = [
  { titleTop: "Piemonte Hotel", titleBottom: "ou Similar", img: "/img/beneficios/hotelumitalia.png", city: "Roma", nights: "4 noites" },
  { titleTop: "San Giorgio e Olimpic", titleBottom: "ou Similar", img: "/img/beneficios/hoteldoisitalia.png", city: "Florença", nights: "3 noites" },
  { titleTop: "Hotel Villa Rosa", titleBottom: "ou Similar", img: "/img/beneficios/hoteltresitalia.png", city: "Veneza", nights: "2 noites" },
  { titleTop: "Ibis Milano Centro", titleBottom: "ou Similar", img: "/img/beneficios/hotelquatroitalia.png", city: "Milão", nights: "2 noites" },
];

/* ====== BOTÕES DOS AEROPORTOS ====== */
const airportColumns = [
  [{ code: "GRU", price: "R$ 11.950" }],
  [
    { code: "POA", price: "R$ 12.950" },
    { code: "CGB", price: "R$ 12.950" },
  ],
  [
    { code: "CWB", price: "R$ 12.950" },
    { code: "CNF", price: "R$ 12.950" },
  ],
  [{ code: "FLN", price: "R$ 12.950" }],
];

// Lista achatada para uso no mobile
const flatButtons = airportColumns.flat();

export default function Pricing() {
  const whatsappPhone = "555491831562";

  const getWhatsappMsg = (airportCode) =>
    encodeURIComponent(
      `Olá! Estou navegando na página da viagem para a Itália e gostaria de tirar uma dúvida sobre as passagens (${airportCode}), os horarios e os valores!`
    );

  const getWhatsappHref = (airportCode) =>
    `https://wa.me/${whatsappPhone}?text=${getWhatsappMsg(airportCode)}`;

  return (
    <section
      id="hospedagem"
      className="py-12 md:py-16"
      style={{ backgroundColor: "#AC0039" }}
    >
      <div className="container">
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 md:mb-10"
        >
          <div className="flex items-center gap-9 justify-start md:justify-center">
            <img
              src="/img/beneficios/caminha.png"
              alt="Ícone cama"
              className="w-18 h-18 md:w-20 md:h-20"
            />
            <h2
              className="
                font-extrabold tracking-[-0.01em]
                text-left md:text-center
              "
              style={{
                color: "#F9F2E1",
                fontFamily: '"Work Sans", sans-serif',
                fontSize: "clamp(40px, 4.2vw, 56px)",
                lineHeight: 1,
              }}
            >
              Hotéis Previstos
            </h2>
          </div>
        </motion.div>

        {/* Cartão bege principal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="rounded-3xl px-4 md:px-8 py-6 md:py-10"
          style={{ backgroundColor: "#F9F2E1" }}
        >
          {/* Grade de hotéis */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-12">
            {hotels.map((h, i) => (
              <div key={i} className="text-center">
                <h3
                  className="mb-3 text-[24px] md:text-[20px] leading-[1.1] font-extrabold"
                  style={{ color: "#222223", fontFamily: '"Work Sans", sans-serif' }}
                >
                  {h.titleTop}
                  <br />
                  <span style={{ fontWeight: 800 }}>{h.titleBottom}</span>
                </h3>

                <div className="mx-auto rounded-2xl overflow-hidden shadow" style={{ width: 280, height: 190 }}>
                  <img src={h.img} alt={h.titleTop} className="w-full h-full object-cover" loading="lazy" decoding="async" />
                </div>

                <div className="mt-3">
                  <p className="text-[12px]" style={{ color: "#222223", fontFamily: '"Roboto Mono", monospace', lineHeight: 1.15 }}>
                    {h.city}
                    <br />
                    {h.nights}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Respiro */}
          <div className="mt-12 md:mt-14" />

          {/* Valor do Pacote */}
          <div>
            <div className="text-center mb-4 md:mb-6">
              <div className="flex items-center justify-center gap-3">
                <img src="/img/beneficios/iconemoeda.png" alt="Ícone moeda" className="w-8 h-8 md:w-10 md:h-10" />
                <h3
                  className="font-extrabold"
                  style={{ color: "#FD4F0D", fontFamily: '"Work Sans", sans-serif', fontSize: "clamp(22px, 3.4vw, 44px)", lineHeight: 1 }}
                >
                  Valor do Pacote
                </h3>
              </div>

              <div className="flex items-center justify-center gap-2 mt-2">
                <img src="/img/clique.png" alt="Ícone informação" width="30" height="30" className="flex-shrink-0" />
                <p className="text-[10px] md:text-[12px]" style={{ color: "#222223", fontFamily: '"Roboto Mono", monospace', opacity: 0.8 }}>
                  Clique nos aeroportos para saber mais sobre horários e valores
                </p>
              </div>
            </div>

            {/* ======= BOTÕES: Mobile (duas colunas) ======= */}
            <div className="grid grid-cols-2 gap-3 md:hidden">
              {flatButtons.map(({ code, price }, idx) => (
                <a
                  key={`mob-${code}-${idx}`}
                  href={getWhatsappHref(code)}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Falar no WhatsApp sobre saída de ${code}`}
                  className="inline-flex items-center justify-center w-full h-11 rounded-full px-3 text-center font-extrabold"
                  style={{
                    backgroundColor: "#FD4F0D",
                    color: "#fff",
                    fontFamily: '"Work Sans", sans-serif',
                    letterSpacing: 0.2,
                  }}
                >
                  {code} – {price}
                </a>
              ))}
            </div>

            {/* ======= BOTÕES: Tablet/Desk (layout original) ======= */}
            <div className="hidden md:grid grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-4 items-start">
              {airportColumns.map((col, idx) => (
                <div key={`desk-col-${idx}`} className="flex flex-col gap-4 w-full items-center">
                  {col.map(({ code, price }, k) => (
                    <a
                      key={`desk-${code}-${k}`}
                      href={getWhatsappHref(code)}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Falar no WhatsApp sobre saída de ${code}`}
                      className="inline-flex items-center justify-center px-6 h-11 rounded-full"
                      style={{
                        backgroundColor: "#FD4F0D",
                        color: "#fff",
                        fontWeight: 800,
                        fontFamily: '"Work Sans", sans-serif',
                        letterSpacing: 0.2,
                        minWidth: 230,
                      }}
                    >
                      {code} – {price}
                    </a>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
