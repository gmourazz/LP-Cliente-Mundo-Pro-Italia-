import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "início", href: "#inicio" },
    { label: "a viagem", href: "#viagem" },
    { label: "hospedagem", href: "#hospedagem" },
    { label: "dúvidas frequentes", href: "#duvidas" },
    { label: "sobre nós", href: "#sobre" },
  ];

  // Work Sans Black 26px + cor #F0D9D1
  const linkStyle = {
    fontFamily: '"Work Sans", sans-serif',
    fontWeight: 900,
    fontSize: "20px",
    lineHeight: 1,
    letterSpacing: "-0.01em",
    color: "#F0D9D1",
  };

  return (
    <header className="sticky top-0 z-50" style={{ background: "#AC0039" }}>
      <div className="relative">
        <div className="container mx-auto max-w-[1280px] px-6 md:px-8 xl:px-10">
          <div className="flex items-center justify-between py-5">
            {/* LOGO */}
            <a href="#inicio" className="block">
              <img
                src="/img/logomundoprobranca.png"
                alt="Mundo Pró Viagens"
                className="h-16 md:h-[86px] object-contain"
              />
            </a>

            {/* Botão Mobile */}
            <motion.button
              type="button"
              className="md:hidden p-2 rounded-full bg-black text-white"
              onClick={() => setIsMenuOpen((v) => !v)}
              aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
              whileTap={{ scale: 0.95 }}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </motion.button>

            {/* NAV DESKTOP */}
            <nav
              role="navigation"
              className="hidden md:flex items-center space-x-2 bg-[#222223] rounded-full px-2 py-2"
            >
              {navItems.map((item) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  className="px-4 py-3 rounded-full transition-colors"
                  style={linkStyle}
                  whileHover={{ backgroundColor: "#F0D9D1", color: "#000" }}
                >
                  {item.label}
                </motion.a>
              ))}
            </nav>
          </div>
        </div>

        {/* MENU MOBILE */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              key="dropdown"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="md:hidden absolute right-4 top-full mt-2 z-50"
            >
              <nav
                id="mobile-menu"
                role="navigation"
                className="w-[82vw] max-w-[360px] rounded-2xl bg-black/95 backdrop-blur p-3 border border-white/10"
              >
                <ul className="space-y-1">
                  {navItems.map((item) => (
                    <li key={item.href}>
                      <motion.a
                        href={item.href}
                        className="block w-full px-4 py-3 rounded-xl transition-colors"
                        style={linkStyle}
                        whileHover={{ backgroundColor: "#F0D9D1", color: "#000" }}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.label}
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
