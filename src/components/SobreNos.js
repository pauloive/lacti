import Image from 'next/image';
import './SobreNos.css';

export default function SobreNos() {
  return (
    <section className="sobre secao" id="sobre">
      <div className="container">
        <div className="sobre-interior">

          {/* Texto */}
          <div className="sobre-texto-col revelar-esquerda">
            <span className="sobre-etiqueta">A Nossa História</span>
            <div className="linha-dourada" />
            <h2 className="secao-titulo sobre-titulo">
              LACTIFOZ — Qualidade e experiência no setor alimentar
            </h2>
            <p className="sobre-texto">
              Com raízes em 1987 e fundada em 1996, a LACTIFOZ – Transformação e Comércio
              de Peixes e Mariscos, S.A. dedica-se à Transformação e Comercialização de produtos alimentares de
              qualidade, com presença nos mercados comunitário e extracomunitário.
            </p>
            <p className="sobre-texto">
              Aliamos experiência, qualidade e inovação a uma ampla gama de produtos, através
              das nossas marcas Marazul, Pescafish e Quinta da Villa.
            </p>
            <p className="sobre-texto">
              Apostando continuamente na qualidade dos produtos e na prestação de um
              serviço de excelência, a LACTIFOZ mantém uma postura dinâmica e orientada para
              o futuro, procurando construir relações de confiança e oferecer aos seus clientes
              soluções que respondam às necessidades de um mercado em constante evolução.
            </p>
            <p className="sobre-texto">
              Hoje, mantemos o espírito familiar que está na nossa origem, aliado a uma estrutura
              dinâmica e preparada para os desafios do mercado nacional e internacional.
            </p>
            <p className="sobre-texto">
              As nossas marcas Marazul, Pescafish e Quinta da Villa refletem o nosso
              compromisso com a qualidade e a satisfação dos nossos clientes.
            </p>
            <p className="sobre-texto">
              Crescemos com o tempo, mas mantemos os valores de sempre: qualidade,
              proximidade e confiança.
            </p>

            <div className="sobre-marcas">
              <span className="sobre-marcas-etiqueta">As Nossas Marcas</span>
              <div className="sobre-marcas-linha">
                <Image
                  src="/images/marcas/marazul.png"
                  alt="Marca Marazul"
                  width={166}
                  height={69}
                  className="sobre-marcas-logo"
                />
                <Image
                  src="/images/marcas/pescafixe.png"
                  alt="Marca Pescafixe"
                  width={118}
                  height={69}
                  className="sobre-marcas-logo"
                />
                <Image
                  src="/images/marcas/quinta-da-villa.png"
                  alt="Marca Quinta da Villa"
                  width={154}
                  height={69}
                  className="sobre-marcas-logo"
                  style={{ marginLeft: '2px' }}
                />
              </div>
            </div>
          </div>

          {/* Imagem */}
          <div className="sobre-imagem-wrapper revelar-direita">
            <div className="sobre-imagem-foto">
              <Image
                src="/images/sobre-nos-barco.jpg"
                alt="Barco de pesca da Lactifoz no oceano"
                fill
                sizes="(max-width: 900px) 100vw, 45vw"
                style={{ objectFit: 'cover', objectPosition: 'center' }}
                priority={false}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
