'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import './Navbar.css';

const links = [
  { href: '#inicio',       label: 'Início' },
  { href: '#sobre',        label: 'Sobre' },
  { href: '#produtos',     label: 'Produtos' },
  { href: '#localizacao',  label: 'Localização' },
];

export default function Navbar() {
  const [menuAberto, setMenuAberto] = useState(false);
  const [scrollado, setScrollado] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrollado(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`navbar${scrollado ? ' scrollado' : ''}`}>
      <div className="container navbar-interior">

        <Link href="/" className="navbar-logo">
          <Image
            src="/images/lactifoz-logo-transparente.png"
            alt="Lactifoz"
            width={120}
            height={55}
            priority
            style={{ width: '120px', height: 'auto' }}
          />
        </Link>

        <nav className={`navbar-links${menuAberto ? ' aberto' : ''}`} aria-label="Navegação principal">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="navbar-link"
              onClick={() => setMenuAberto(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          className={`navbar-hamburger${menuAberto ? ' aberto' : ''}`}
          onClick={() => setMenuAberto(!menuAberto)}
          aria-label={menuAberto ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuAberto}
        >
          <span className="hamburger-linha" />
          <span className="hamburger-linha" />
          <span className="hamburger-linha" />
        </button>

      </div>
    </header>
  );
}
