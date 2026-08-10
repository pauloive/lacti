import Image from 'next/image';
import './legal.css';

export const metadata = {
  title: 'Financiamento — Portugal 2030',
  description: 'Ficha do projeto cofinanciado pela União Europeia através do Mar2030/Portugal 2030 — Lactifoz, S.A.',
};

export default function FinanciamentoMar2030() {
  return (
    <div className="legal-pagina">
      <div className="container">
        <div className="legal-conteudo">

          <div className="financiamento-selos">
            <Image
              src="/images/financiamento-mar2030.webp"
              alt="Mar 2030 · Portugal 2030 · Cofinanciado pela União Europeia"
              width={489}
              height={62}
            />
          </div>

          <h1 className="legal-titulo">Mitigação dos Efeitos do Aumento dos Custos de Produção</h1>
          <p className="legal-atualizacao">Ficha de projeto cofinanciado pela União Europeia</p>

          <p className="financiamento-beneficiario">
            <strong>Beneficiário:</strong> Lactifoz, Transformação e Comércio de Peixes e Mariscos, S.A.<br />
            <strong>Localização:</strong> Carriço — Pombal, Leiria
          </p>

          <section className="legal-secao">
            <h2>Prioridade</h2>
            <p>
              Fomentar a transformação e comercialização de produtos da pesca, contribuindo para a segurança alimentar.
            </p>
          </section>

          <section className="legal-secao">
            <h2>Objetivo da Operação</h2>
            <p>
              O objetivo da operação é tornar a empresa mais resiliente e, desta forma, conter o aumento de preços dos
              produtos junto dos consumidores. Para tal, mitigam-se os efeitos do extraordinário aumento dos preços de
              produção que os operadores económicos do sector da pesca enfrentaram em 2022, em consequência da guerra
              na Ucrânia.
            </p>
            <p>
              Estes apoios iniciaram-se com o programa Mar 2020 e os resultados obtidos evidenciam-se pelo facto do
              aumento dos preços, entre 2022-2023, medido através do Índice de Preços no Consumidor, na fileira do
              pescado (4,2%), ter sido, de forma generalizada, inferior ao aumento da média do conjunto dos produtos
              da alimentação (10%).
            </p>
          </section>

          <section className="legal-secao">
            <h2>Dados do Financiamento</h2>
            <div className="financiamento-grelha">
              <div className="financiamento-linha">
                <strong>Custo elegível</strong>
                <span>35 954,03 €</span>
              </div>
              <div className="financiamento-linha">
                <strong>Apoio Financeiro da UE</strong>
                <span>25 167,82 €</span>
              </div>
              <div className="financiamento-linha">
                <strong>Cofinanciamento da UE</strong>
                <span>70%</span>
              </div>
              <div className="financiamento-linha">
                <strong>Código da operação</strong>
                <span>MAR-022.5.1-FEAMPA-00020</span>
              </div>
            </div>
          </section>

          <a
            href="/documents/financiamento-mar2030.pdf"
            className="financiamento-pdf-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver ficha de projeto original (PDF) ↓
          </a>

        </div>
      </div>
    </div>
  );
}
