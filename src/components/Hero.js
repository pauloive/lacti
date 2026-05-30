import Image from 'next/image';
import Link from 'next/link';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero" id="inicio">

      {/* Fundo gradiente (substituir por imagem real na Fase 2) */}
      <div className="hero-gradient" aria-hidden="true" />
      <div className="hero-overlay" aria-hidden="true" />

      <div className="container">
        <div className="hero-conteudo">

          <span className="hero-etiqueta">Tradição e Qualidade</span>

          <h1 className="hero-titulo">
            O Melhor do Mar,<br />
            da Nossa Terra<br />
            para a <span>Sua Mesa</span>
          </h1>

          <p className="hero-subtitulo">
            Há décadas a transformar e comercializar peixes e marisco
            com rigor, frescura e paixão pelo que fazemos.
            Qualidade certificada, diretamente para si.
          </p>

          <div className="hero-acoes">
            <Link href="#produtos" className="btn-primario">
              Conheça os Nossos Produtos
            </Link>
            <Link href="#sobre" className="btn-secundario">
              Sobre Nós
            </Link>
          </div>

        </div>
      </div>

      {/* Onda decorativa no fundo */}
      <div className="hero-onda" aria-hidden="true">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z"
            fill="#ffffff"
          />
        </svg>
      </div>

    </section>
  );
}
