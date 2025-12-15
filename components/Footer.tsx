import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-8 bg-black border-t border-white/10 text-center text-zinc-600 text-sm">
      <div className="container mx-auto px-4">
        <p className="mb-2">
          &copy; {currentYear} Guilherme Zampoli. Todos os direitos reservados.
        </p>
        <p className="text-xs">
          "Manual da Primeira Venda" é uma marca registrada.
        </p>
      </div>
    </footer>
  );
};

export default Footer;