import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Quebra por parágrafos e aplica tipografia
  const renderAnswer = (text, small = false) => {
    const parts = String(text).split(/\n\s*\n/);
    return parts.map((chunk, i) => (
      <p
        key={i}
        style={{
          color: "#000000",
          fontSize: small ? "11px" : "14px",
          textAlign: "center",
          lineHeight: 1.35,
          letterSpacing: "0.1px",
          marginTop: i === 0 ? 0 : "1.25em",
        }}
      >
        {chunk}
      </p>
    ));
  };

  const faqs = [
    { 
      question: "Essa viagem é em excursão?", 
      answer: "Não, nossa viagem não é em grupo fechado, o que significa que você terá a liberdade de explorar e aproveitar cada momento conforme suas preferências. Nossos roteiros não são aquelas \"caravanas\" em ônibus e com guia que passam correndo pelo ponto turístico e você não tem nem tempo de bater foto. Não se preocupe se você nunca viajou ou se não fala inglês, estaremos auxiliando em tudo." 
    },
    { 
      question: "Como será o suporte da agência durante a viagem?", 
      answer: "Aqui na Mundo Pró, você não receberá um \"Boa viagem e tchau\". Estaremos com você durante toda a viagem, auxiliando em tudo o que for necessário. Somos chatos igual mãe, gostamos de perguntar se você já chegou e adoramos receber fotos nas pirâmides, tomando aquela cerveja no resort no Caribe, subindo na Torre Eiffel ou em qualquer outro lugar que você achar diferentão. Para acompanhá-lo em sua viagem, criamos grupos no WhatsApp com o atendente e uma pessoa de suporte. Assim, terá auxílio durante toda a sua jornada." 
    },
    { 
      question: "Posso mudar a ordem das cidades ou incluir/excluir cidades?", 
      answer: "Sim. O pacotes que enviamos é apenas uma sugestão otimizada, mas podemos ajustar conforme o seu interesse. Se quiser incluir ou excluir cidades, adaptamos o planejamento e refazemos a simulação de valores para você." 
    },
    { 
      question: "Posso escolher outra data ou outros hotéis?", 
      answer: "Claro. Nós sugerimos estes hotéis, mas podemos listar outras opções para que escolham.\n\nA data que está no PDF é apenas uma sugestão. Podemos simular em outro período se quiser. Mas claro, pode ter alteração no valor." 
    },
    { 
      question: "Como será feito meu roteiro personalizado e quais as dicas que a agência dará?", 
      answer: "Nós preparamos um roteiro dia a dia com ingressos, mapas, sugestões de passeios, restaurantes e TODAS as dicas que vai precisar. Você sai do Brasil com TODOS os passos organizados.\n\nA gente vai te dar dicas sobre transporte público, compra de chip de internet, cartões de crédito e até mesmo sobre imigração. Nós vamos cuidar de todos os detalhes da sua viagem." 
    },
    { 
      question: "Posso incluir transfer do aeroporto ao hotel?", 
      answer: "Sim, podemos incluir transfers privativos ou compartilhados, de acordo com sua preferência e orçamento. Se preferir, também damos orientações detalhadas de como chegar de transporte público." 
    },
    { 
      question: "Qual o gasto médio com alimentação?", 
      answer: "Perfil Econômico:\nAlimentação: Entre 20 a 40 euros por dia.\nFast food, comida em mercado, restaurantes simples.\nTransporte Público: Cerca de 10 euros por dia.\n\nPerfil Médio:\nAlimentação: Entre 50 a 100 euros por dia.\nRestaurantes bem avaliados com pratos com valor médio de 15 euros.\nTransporte: Cerca de 20 a 40 euros por dia. Uber/Taxi são as opções de transporte.\n\nPerfil de Luxo:\nAlimentação: Acima de 150 euros por dia.\nRestaurantes premiados com pratos especiais.\nTransporte: Depende mais de opções privativas, podendo variar de 50 a 100 euros por dia." 
    },
    { 
      question: "Quais são os métodos de pagamento aceitos para o pacote de viagem?", 
      answer: "Isso vai depender da companhia aérea escolhida. Algumas parcelam no cartão em 5 ou 6x e outras em 10x. Temos também opção de parcelamento no boleto. Consulte-nos." 
    },
    { 
      question: "Mas moro longe da agência, como vou fazer o pagamento?", 
      answer: "Não se preocupe. Nosso atendimento é 100% online e seguro." 
    },
    { 
      question: "O que não está incluso no pacote?", 
      answer: "Serviços que não estejam listados no roteiro.\nTransfers\nRefeições (almoço e jantar) e gastos pessoais, como compras ou transporte fora do roteiro.\nGuias locais particulares — nossos roteiros são pensados para que você consiga aproveitar de forma independente, com todas as instruções em português e suporte da agência pelo WhatsApp. Caso deseje guias em algum destino, podemos cotar à parte.\nTaxas locais cobradas diretamente nos hotéis (city tax)." 
    },
  ];

  return (
    <section
      id="duvidas"
      className="py-10 no-shadows"
      style={{ backgroundColor: "#A0D3F1", fontFamily: '"Roboto Mono", monospace' }}
    >
      <style>{`
        .no-shadows, .no-shadows * { box-shadow:none !important; text-shadow:none !important; filter:none !important; }
      `}</style>

      <div className="mx-auto" style={{ maxWidth: "1280px" }}>
        {/* Cabeçalho Desktop */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 hidden md:block"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <img src="/img/beneficios/question.png" alt="Dúvidas frequentes" className="w-[72px] h-[72px] object-contain" />
            <h2 className="font-extrabold leading-tight" style={{ color: "#FD4F0D", fontFamily: '"Work Sans", sans-serif', fontSize: "65px" }}>
              Dúvidas Frequentes
            </h2>
          </div>
        </motion.div>

        {/* Cabeçalho Mobile */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} className="md:hidden mb-5 px-3">
          <div className="flex items-center gap-3">
            <img src="/img/beneficios/question.png" alt="Dúvidas frequentes" className="w-12 h-12 object-contain" />
            <h2 className="font-extrabold leading-[1] text-[35px]" style={{ color: "#FD4F0D", fontFamily: '"Work Sans", sans-serif' }}>
              Dúvidas
              <br /> Frequentes
            </h2>
          </div>
        </motion.div>

        {/* Lista Desktop */}
        <div className="space-y-4 mx-auto hidden md:block" style={{ width: "1154px" }}>
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={index} className="rounded-2xl overflow-hidden" style={{ width: "1154px" }}>
                {/* Pergunta */}
                <button
                  onClick={() => toggleItem(index)}
                  className="relative flex items-center justify-center text-center"
                  style={{ backgroundColor: "#FD4F0D", width: "1154px", height: "80px", paddingLeft: "24px", paddingRight: "56px" }}
                  aria-expanded={isOpen}
                  aria-controls={`faq-content-${index}`}
                >
                  <span className="block" style={{ color: "#FFFFFF", fontFamily: '"Work Sans", sans-serif', fontWeight: 700, fontSize: "25px" }}>
                    {faq.question}
                  </span>

                  <div className="absolute" style={{ right: "16px", top: "50%", transform: "translateY(-50%)", color: "#FFFFFF" }}>
                    {isOpen ? <ChevronUp className="w-7 h-7" aria-hidden="true" /> : <ChevronDown className="w-7 h-7" aria-hidden="true" />}
                  </div>
                </button>

                {/* Resposta */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-content-${index}`}
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      style={{ backgroundColor: "#FFF2A6", width: "1154px", overflow: "hidden" }}
                    >
                      <div className="h-full w-full flex items-center justify-center px-6 py-4">
                        <div className="w-full" style={{ maxWidth: "920px" }}>
                          {renderAnswer(faq.answer)}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Lista Mobile */}
        <div className="md:hidden px-4 space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={index} className="rounded-2xl overflow-hidden">
                {/* Pergunta */}
                <button
                  onClick={() => toggleItem(index)}
                  className="relative w-full flex items-center justify-between px-4 h-14 rounded-2xl"
                  style={{ backgroundColor: "#FD4F0D" }}
                  aria-expanded={isOpen}
                  aria-controls={`m-faq-content-${index}`}
                >
                  <span className="text-left font-bold" style={{ color: "#FFFFFF", fontFamily: '"Work Sans", sans-serif', fontSize: "14px", lineHeight: 1.1 }}>
                    {faq.question}
                  </span>
                  {isOpen ? <ChevronUp className="w-5 h-5 text-white" aria-hidden="true" /> : <ChevronDown className="w-5 h-5 text-white" aria-hidden="true" />}
                </button>

                {/* Resposta */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`m-faq-content-${index}`}
                      key="m-content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden rounded-2xl"
                      style={{ backgroundColor: "#FFF2A6" }}
                    >
                      <div className="px-4 py-3">
                        <div className="text-[#000]">{renderAnswer(faq.answer, true)}</div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;