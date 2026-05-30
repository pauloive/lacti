import './Localizacao.css';

export default function Localizacao() {
  return (
    <section className="localizacao secao" id="localizacao">
      <div className="container">
        <div className="localizacao-interior">

          {/* Informação */}
          <div className="revelar-esquerda">
            <span className="localizacao-etiqueta">Onde Estamos</span>
            <div className="linha-dourada" />
            <h2 className="secao-titulo localizacao-titulo">
              Venha Conhecer-nos
            </h2>

            <div className="localizacao-blocos">

              {/* Morada */}
              <div className="localizacao-bloco">
                <div className="localizacao-bloco-icone">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <p className="localizacao-bloco-titulo">Morada</p>
                  <p className="localizacao-bloco-texto">
                    Rua do Centro Social Nº 4,<br />
                    3105-057 Carriço,<br />
                    Portugal
                  </p>
                </div>
              </div>

              {/* Telefone */}
              <div className="localizacao-bloco">
                <div className="localizacao-bloco-icone">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.48 2 2 0 0 1 3.58 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.72 16z" />
                  </svg>
                </div>
                <div>
                  <p className="localizacao-bloco-titulo">Telefone</p>
                  <p className="localizacao-bloco-texto">
                    <a href="tel:+351236950991">236 950 991</a><br />
                    <a href="tel:+351913734105">913 734 105</a>
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="localizacao-bloco">
                <div className="localizacao-bloco-icone">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div>
                  <p className="localizacao-bloco-titulo">Email</p>
                  <p className="localizacao-bloco-texto">
                    <a href="mailto:geral@lactifoz.pt">geral@lactifoz.pt</a>
                  </p>
                </div>
              </div>

              {/* Horário */}
              <div className="localizacao-bloco">
                <div className="localizacao-bloco-icone">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <div>
                  <p className="localizacao-bloco-titulo">Horário</p>
                  <div className="horario-grelha">
                    <div className="horario-linha">
                      <strong>Seg — Sáb</strong>
                      09:00 — 13:00
                    </div>
                    <div className="horario-linha">
                      <strong>Seg — Sáb</strong>
                      15:00 — 19:00
                    </div>
                    <div className="horario-linha">
                      <strong>Domingo</strong>
                      Encerrado
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Mapa */}
          <div className="localizacao-mapa revelar-direita">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2884!2d-8.8034009!3d39.9910348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd224037647f4441%3A0x357f075ec193fb5d!2sLactifoz%2C%20SA.!5e0!3m2!1spt!2spt!4v1748600000000!5m2!1spt!2spt"
              title="Localização Lactifoz no Google Maps"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="localizacao-mapa-overlay">
              <p className="localizacao-mapa-label">Lactifoz, S.A. — Rua do Centro Social Nº 4, Carriço</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
