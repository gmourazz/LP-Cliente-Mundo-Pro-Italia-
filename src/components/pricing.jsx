import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const Pricing = () => {
  const categories = [
    {
      name: 'Categoria A',
      price: 'R$ 5.390',
      priceNote: 'Por pessoa em quarto duplo',
      ctaHref:
        'https://api.whatsapp.com/send?phone=5554991831562&text=Ol%C3%A1!%20Estou%20navegando%20na%20p%C3%A1gina%20de%20viagem%20para%20o%20Atacama%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20a%20categoria%20A%20de%20hospedagem.',
      labels: { hotel: 'Hostal Inti e Killa ou similar' },
      description: {
        hotel:
          'Opção econômica, perfeita para viajantes que buscam economizar sem comprometer a experiência. Os quartos são simples, mas oferecem o básico para uma estadia confortável. Esta escolha é adequada para aqueles que preferem gastar menos com acomodação e mais com atividades e exploração do Deserto do Atacama.',
      },
      images: [
        { src: '/img/beneficios/categoriaimagemum.png' },
        { src: '/img/beneficios/categoriaimagemdois.png' },
        { src: '/img/beneficios/categoriaimagemtres.png' },
      ],
    },
    {
      name: 'Categoria B',
      price: 'R$ 5.990',
      priceNote: 'Por pessoa em quarto duplo',
      ctaHref:
        'https://api.whatsapp.com/send?phone=5554991831562&text=Ol%C3%A1!%20Estou%20navegando%20na%20p%C3%A1gina%20de%20viagem%20para%20o%20Atacama%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20a%20categoria%20B%20de%20hospedagem.',
      labels: { hotel: 'Hotel Parina ou similar' },
      description: {
        hotel:
          'Uma escolha intermediária, que oferece um equilíbrio entre conforto e acessibilidade. Os viajantes encontrarão quartos bem equipados e comodidades para uma estadia agradável. É uma opção sólida para aqueles que desejam desfrutar de um nível razoável de conforto sem ultrapassar o orçamento',
        machupicchu:
          'Opção básica, perfeita para pernoitar antes de Machu Picchu. Conforto simples, mas suficiente para explorar a cidade e estar bem localizado para a visita.',
        train:
          'Uma experiência completa durante a viagem entre Cusco e Águas Calientes. O Vistadome conta com janelas panorâmicas maiores, que tornam o trajeto ainda mais impressionante. Além disso, oferece maior espaço entre os assentos, mais conforto, snacks inclusos e apresentações culturais a bordo, trazendo a cultura andina para dentro do trem.',
      },
      images: [
        { src: '/img/beneficios/categoriabimagemum.png' },
        { src: '/img/beneficios/categoriabimagemdois.png' },
        { src: '/img/beneficios/categoriabimagemtres.png' },
      ],
    },
    {
      name: 'Categoria C',
      price: 'R$ 6.990',
      priceNote: 'Por pessoa em quarto duplo',
      ctaHref:
        'https://api.whatsapp.com/send?phone=5554991831562&text=Ol%C3%A1!%20Estou%20navegando%20na%20p%C3%A1gina%20de%20viagem%20para%20o%20Atacama%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20a%20categoria%20C%20de%20hospedagem.',
      labels: { hotel: 'Poblado Kimal ou similar' },
      description: {
        hotel:
          'Destaca-se como uma opção de hospedagem sofisticada e imersa na cultura local. Oferece aos seus hóspedes uma experiência única, harmonizando a beleza natural do deserto com instalações elegantes. Os quartos bem decorados, combinados com ótimo atendimento, elevam a estadia a um nível de conforto e sofisticação incomparáveis.',
      },
      images: [
        { src: '/img/beneficios/categoriacimagemum.png' },
        { src: '/img/beneficios/categoriacimagemdois.png' },
        { src: '/img/beneficios/categoriacimagemtres.png' },
      ],
    },
  ];

  return (
    <section id="hospedagem" className="py-10 no-shadows" style={{ backgroundColor: '#AC0039' }}>
      <style>{`.no-shadows, .no-shadows * { box-shadow:none !important; text-shadow:none !important; filter:none !important; }`}</style>
      <div className="container">
        {/* ===== Header Desktop ===== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 hidden md:block"
        >
          <div className="flex items-center justify-center gap-4 mb-11">
            <h2
              className="font-extrabold text-[65px] leading-[0.88] tracking-[-0.02em]"
              style={{ color: '#F9F2E1' }}
            >
              <img
                src="/img/beneficios/iconemoeda.png"
                alt="Ícone moeda"
                className="w-16 h-16 inline-block align-middle mr-4"
                style={{ objectFit: 'contain' }}
              />
              <span className="align-middle">
                Valor do pacote conforme <br />
                opção de hospedagem <br />
                escolhida
              </span>
            </h2>
          </div>
        </motion.div>

        {/* ===== Header Mobile ===== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="md:hidden mb-6"
        >
          <div className="flex items-start justify-center gap-2">
            <img
              src="/img/beneficios/iconemoeda.png"
              alt="Ícone moeda"
              className="w-10 h-10 shrink-0 mt-[2px]"
              style={{ objectFit: 'contain' }}
            />
            <h2
              className="font-bold leading-[1] text-[30px] text-esquerda"
              style={{ color: '#F9F2E1', fontFamily: '"Work Sans", sans-serif' }}
            >
              <strong>
                Valor do pacote conforme<br />
                opção de hospedagem escolhida
              </strong>
            </h2>
          </div>
        </motion.div>

        {/* ===== Categorias ===== */}
        <div className="space-y-16">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="rounded-3xl p-6"
              style={{ backgroundColor: '#FAF3E1' }}
            >
              <div className="grid lg:grid-cols-3 gap-8 mb-6">
                {/* ESQUERDA */}
                <div className="lg:col-span-2">
                  {/* Títulos */}
                  <h3
                    className="mb-7 hidden md:block"
                    style={{
                      color: '#FD4F0D',
                      fontFamily: '"Work Sans", sans-serif',
                      fontSize: '60px',
                      fontWeight: 900,
                      lineHeight: 0.95,
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {category.name}
                  </h3>
                  <h3
                    className="mb-3 md:hidden"
                    style={{
                      color: '#FD4F0D',
                      fontFamily: '"Work Sans", sans-serif',
                      fontWeight: 900,
                      fontSize: '32px',
                      lineHeight: 1,
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {category.name}
                  </h3>

                  {/* Blocos: rótulo + parágrafo */}
                  <div
                    className="space-y-3 md:space-y-4"
                    style={{
                      color: '#222223',
                      fontFamily: '"Roboto Mono", monospace',
                      fontSize: '10px',
                      lineHeight: 1.25,
                    }}
                  >
                    {/* HOTEL */}
                    <div>
                      <p
                        className="font-bold md:text-[18px]"
                        style={{ fontFamily: '"Work Sans", sans-serif' }}
                      >
                        {category.labels.hotel}
                        {category.description?.hotel ? ':' : ''}
                      </p>
                      {category.description?.hotel && (
                        <p className="md:text-[15px] md:leading-[1.35]">
                          {category.description.hotel}
                        </p>
                      )}
                    </div>

                    {/* MACHU PICCHU (se existir) */}
                    {category.labels?.machu && category.description?.machupicchu && (
                      <div>
                        <p className="font-bold md:text-[18px]" style={{ fontFamily: '"Work Sans", sans-serif' }}>
                          {category.labels.machu}:
                        </p>
                        <p className="md:text-[15px] md:leading-[1.35]">
                          {category.description.machupicchu}
                        </p>
                      </div>
                    )}

                    {/* TREM (se existir) */}
                    {category.labels?.train && category.description?.train && (
                      <div>
                        <p className="font-bold md:text-[18px]" style={{ fontFamily: '"Work Sans", sans-serif' }}>
                          {category.labels.train}:
                        </p>
                        <p className="md:text-[15px] md:leading-[1.35]">
                          {category.description.train}
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                {/* DIREITA (PREÇO + BOTÃO) */}
                <div className="flex flex-col items-center lg:items-end justify-center">
                  <div className="relative flex flex-col items-center w-[260px] md:w-[350px]">
                    <div
                      className="text-center md:block w-[260px] h-[130px] md:w-[350px] md:h-[163px] rounded-[18px] md:rounded-[24px]"
                      style={{ backgroundColor: '#A0D3F1' }}
                    >
                      <div className="pt-3 md:pt-4">
                        <span
                          className="uppercase font-bold block text-[10px] md:text-[15px] leading-[1.2] md:leading-[1.35]"
                          style={{ color: '#222223', fontFamily: '"Roboto Mono", monospace' }}
                        >
                          A partir de
                        </span>
                        <div
                          className="leading-none mt-1 text-[28px] md:text-[46px] font-extrabold"
                          style={{ color: '#FD4F0D', fontFamily: '"Work Sans", sans-serif' }}
                        >
                          {category.price}
                        </div>
                        <div
                          className="mt-1 text-[12px] md:text-[16px] leading-[1.2] md:leading-[1.35]"
                          style={{ color: '#222223', fontFamily: '"Roboto Mono", monospace' }}
                        >
                          {category.priceNote}
                        </div>
                      </div>
                    </div>

                    <div className="-mt-8 md:-mt-5 z-10">
                      <a
                        href={category.ctaHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Abrir WhatsApp para mais informações sobre ${category.name}`}
                      >
                        <Button
                          className="
                            rounded-full transition-all duration-300 hover:scale-105
                            w-[240px] h-[44px] md:w-[300px] md:h-[56px]
                          "
                          style={{
                            backgroundColor: '#FD4F0D',
                            color: '#222223',
                            fontWeight: 800,
                            letterSpacing: '0.3px',
                            fontFamily: '"Work Sans", sans-serif',
                          }}
                        >
                          VEJA TODAS AS INFORMAÇÕES
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* GALERIA */}
              <div className="grid md:grid-cols-3 gap-6">
                {category.images.map((img, imgIndex) => (
                  <div key={imgIndex} className="rounded-2xl overflow-hidden">
                    <h4
                      className="text-center mb-2"
                      style={{
                        color: '#FD4F0D',
                        fontFamily: '"Work Sans", sans-serif',
                        fontWeight: 800,
                        fontSize: '35px',
                        lineHeight: 1.1,
                      }}
                    >
                      {img.title}
                    </h4>
                    <a
                      href={img.src}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block group rounded-2xl overflow-hidden mx-auto"
                      style={{ width: '350px', height: '250px' }}
                    >
                      <img
                        className="hidden md:block w-[350px] h-[250px] object-cover transition-transform duration-300 group-hover:scale-105 cursor-pointer"
                        alt={img.caption}
                        src={img.src}
                        loading="lazy"
                        decoding="async"
                      />
                      <img
                        className="md:hidden block object-cover transition-transform duration-300 group-hover:scale-105 cursor-pointer"
                        alt={img.caption}
                        src={img.src}
                        loading="lazy"
                        decoding="async"
                        style={{ width: 328, height: 234 }}
                      />
                    </a>
                    <p
                      className="text-center mt-2"
                      style={{ color: '#222223', fontFamily: '"Roboto Mono", monospace' }}
                    >
                      <span className="md:hidden text-[10px] leading-[1.2]">{img.caption}</span>
                      <span className="hidden md:inline text-[15px] leading-[1.35]">{img.caption}</span>
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;