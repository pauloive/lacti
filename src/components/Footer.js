import Image from 'next/image';
import Link from 'next/link';
import './Footer.css';

const anoAtual = new Date().getFullYear();

const navLinks = [
  { href: '#inicio',      label: 'Início' },
  { href: '#sobre',       label: 'Sobre Nós' },
  { href: '#produtos',    label: 'Produtos' },
  { href: '#localizacao', label: 'Localização' },
];

function IconeInstagram() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function IconeFacebook() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function IconeLinkedIn() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grelha">

          {/* Marca */}
          <div>
            <Link href="/" className="footer-logo">
              <Image
                src="/images/lactifoz-logo-transparente.png"
                alt="Lactifoz"
                width={130}
                height={60}
                style={{ width: '130px', height: 'auto' }}
              />
            </Link>
            <p className="footer-descricao">
              Transformação e comércio de peixes e marisco
              com tradição, frescura e qualidade certificada.
              O melhor do mar para a sua mesa.
            </p>
            <div className="footer-redes">
              <a href="https://www.facebook.com/profile.php?id=100008940099606" className="footer-rede" aria-label="Facebook da Lactifoz" target="_blank" rel="noopener noreferrer">
                <IconeFacebook />
              </a>
            </div>
          </div>

          {/* Navegação */}
          <div>
            <h3 className="footer-coluna-titulo">Navegação</h3>
            <nav className="footer-links" aria-label="Navegação do rodapé">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="footer-link">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Produtos */}
          <div>
            <h3 className="footer-coluna-titulo">Produtos</h3>
            <div className="footer-links">
              {['Peixe Fresco', 'Marisco', 'Conservas', 'Congelados', 'Fumados'].map((p) => (
                <Link key={p} href="#produtos" className="footer-link">{p}</Link>
              ))}
            </div>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="footer-coluna-titulo">Contacto</h3>
            <div>
              <div className="footer-contacto-item">
                <svg className="footer-contacto-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                Rua do Centro Social Nº 4,<br />3105-057 Carriço, Portugal
              </div>
              <div className="footer-contacto-item">
                <svg className="footer-contacto-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.48 2 2 0 0 1 3.58 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.72 16z" />
                </svg>
                236 950 991 / 913 734 105
              </div>
              <div className="footer-contacto-item">
                <svg className="footer-contacto-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                geral@lactifoz.pt
              </div>
            </div>
          </div>

        </div>

        {/* Barra de copyright */}
        <div className="footer-barra">
          <p className="footer-copyright">
            © {anoAtual} Lactifoz - Transformação e Comércio de Peixes e Marisco, S.A. Todos os direitos reservados.
          </p>
          <div className="footer-legal">
            <a href="#" className="footer-legal-link">Política de Privacidade</a>
            <a href="#" className="footer-legal-link">Termos de Uso</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
