import Image from 'next/image';
import ContadorAnimado from './ContadorAnimado';
import './SobreNos.css';

const stats = [
  { numero: 30, sufixo: '+', texto: 'Anos de\nExperiência' },
  { numero: 100, sufixo: '%', texto: 'Qualidade\nCertificada' },
  { numero: 5, sufixo: '+', texto: 'Categorias\nde Produto' },
];

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
              Décadas de Dedicação<br />ao Mar
            </h2>
            <p className="sobre-texto">
              A Lactifoz nasceu da paixão pelo mar e pelo rigor na seleção
              dos melhores produtos. Desde a nossa fundação, temos trabalhado
              lado a lado com pescadores e produtores locais para garantir que
              cada peixe e marisco chega à sua mesa com a máxima frescura e qualidade.
            </p>
            <p className="sobre-texto">
              Com instalações modernas e certificadas, asseguramos os mais altos
              padrões de transformação e conservação, respeitando o ambiente
              e valorizando os recursos do nosso litoral. A nossa missão é
              simples: levar o melhor do mar até si.
            </p>

            <div className="sobre-stats">
              {stats.map((stat) => (
                <div key={stat.texto}>
                  <div className="stat-numero">
                    <ContadorAnimado valor={stat.numero} sufixo={stat.sufixo} />
                  </div>
                  <div className="stat-texto">
                    {stat.texto.split('\n').map((linha, i) => (
                      <span key={i}>{linha}{i === 0 && <br />}</span>
                    ))}
                  </div>
                </div>
              ))}
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
