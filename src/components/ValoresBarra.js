import './ValoresBarra.css';

const valores = [
  {
    titulo: 'Qualidade Certificada',
    descricao: 'Processos auditados e certificados pelos mais altos padrões da indústria alimentar.',
    icone: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
  },
  {
    titulo: 'Frescura Garantida',
    descricao: 'Do mar para si no menor tempo possível, mantendo todo o sabor e valor nutritivo.',
    icone: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    titulo: 'Tradição Portuguesa',
    descricao: 'Décadas de experiência a respeitar as técnicas e o saber-fazer da nossa costa.',
    icone: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    titulo: 'Sustentabilidade',
    descricao: 'Comprometidos com práticas responsáveis que protegem os oceanos para o futuro.',
    icone: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M2 12C2 6.5 6.5 2 12 2a10 10 0 0 1 8 4" />
        <path d="M5 19.5C5.5 18 6 15 6 12c0-.7.12-1.37.34-2" />
        <path d="M17.29 21.02c.12-.6.43-2.3.5-3.02" />
        <path d="M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4" />
        <path d="M8.65 22c.21-.66.45-1.32.57-2" />
        <path d="M14 13.12c0 2.38 0 6.38-1 8.88" />
        <path d="M2 16h.01" />
        <path d="M21.8 16c.2-2 .131-5.354 0-6" />
        <path d="M9 6.8a6 6 0 0 1 9 5.2v2h3" />
      </svg>
    ),
  },
];

export default function ValoresBarra() {
  return (
    <div className="valores-barra">
      <div className="container">
        <div className="valores-grelha">
          {valores.map((valor) => (
            <div key={valor.titulo} className="valor-item">
              <div className="valor-icone">{valor.icone}</div>
              <h3 className="valor-titulo">{valor.titulo}</h3>
              <p className="valor-descricao">{valor.descricao}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
