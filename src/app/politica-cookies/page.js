import './legal.css';

export const metadata = {
  title: 'Política de Cookies',
  description: 'Política de cookies do website da Lactifoz, S.A. — Informações sobre os cookies utilizados.',
};

export default function PoliticaCookies() {
  return (
    <div className="legal-pagina">
      <div className="container">
        <div className="legal-conteudo">
          <h1 className="legal-titulo">Política de Cookies</h1>
          <p className="legal-atualizacao">Última atualização: Janeiro 2025</p>

          <section className="legal-secao">
            <h2>1. O Que São Cookies?</h2>
            <p>
              Cookies são pequenos ficheiros de texto que são armazenados no seu dispositivo (computador, tablet
              ou telemóvel) quando visita um website. Os cookies permitem que o website reconheça o seu dispositivo
              e memorize informações sobre a sua visita, como as suas preferências de idioma e outras configurações.
            </p>
          </section>

          <section className="legal-secao">
            <h2>2. Tipos de Cookies Utilizados</h2>
            <p>O website da Lactifoz utiliza os seguintes tipos de cookies:</p>

            <h3>2.1 Cookies Estritamente Necessários</h3>
            <p>
              Estes cookies são essenciais para o funcionamento do website e não podem ser desativados.
              São habitualmente definidos apenas em resposta a ações efetuadas pelo utilizador, como
              definir as suas preferências de privacidade, iniciar sessão ou preencher formulários.
            </p>
            <div className="legal-tabela-wrapper">
              <table className="legal-tabela">
                <thead>
                  <tr>
                    <th>Cookie</th>
                    <th>Finalidade</th>
                    <th>Duração</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>cookie_consent</td>
                    <td>Regista o consentimento do utilizador para a utilização de cookies</td>
                    <td>365 dias</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3>2.2 Cookies de Desempenho e Analítica</h3>
            <p>
              Estes cookies permitem-nos contabilizar visitas e fontes de tráfego, para que possamos medir
              e melhorar o desempenho do nosso website. Ajudam-nos a saber quais as páginas mais e menos
              populares e como os visitantes navegam pelo website.
            </p>
            <div className="legal-tabela-wrapper">
              <table className="legal-tabela">
                <thead>
                  <tr>
                    <th>Cookie</th>
                    <th>Fornecedor</th>
                    <th>Finalidade</th>
                    <th>Duração</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>_ga</td>
                    <td>Google Analytics</td>
                    <td>Distinguir utilizadores únicos</td>
                    <td>2 anos</td>
                  </tr>
                  <tr>
                    <td>_ga_*</td>
                    <td>Google Analytics</td>
                    <td>Manter o estado da sessão</td>
                    <td>2 anos</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3>2.3 Cookies de Funcionalidade</h3>
            <p>
              Estes cookies permitem ao website fornecer funcionalidades e personalização melhoradas.
              Podem ser definidos por nós ou por fornecedores terceiros cujos serviços adicionámos
              às nossas páginas.
            </p>
          </section>

          <section className="legal-secao">
            <h2>3. Cookies de Terceiros</h2>
            <p>
              Algumas funcionalidades do nosso website utilizam serviços de terceiros que podem
              definir os seus próprios cookies. Estes incluem:
            </p>
            <ul>
              <li><strong>Google Maps:</strong> Utilizado na secção de localização para exibir o mapa da nossa sede.</li>
              <li><strong>Google Analytics:</strong> Utilizado para análise estatística do tráfego do website.</li>
              <li><strong>Redes Sociais (Facebook):</strong> Botões de partilha e links para as nossas páginas sociais.</li>
            </ul>
            <p>
              A Lactifoz não controla os cookies definidos por terceiros. Recomendamos que consulte
              as políticas de cookies dos respetivos fornecedores para mais informações.
            </p>
          </section>

          <section className="legal-secao">
            <h2>4. Como Gerir os Cookies</h2>
            <p>
              Pode controlar e/ou eliminar cookies conforme a sua preferência. Pode configurar o seu
              browser para recusar cookies ou para ser avisado sempre que um cookie é enviado. No entanto,
              a desativação de cookies pode afetar a funcionalidade de determinadas partes do website.
            </p>
            <p>Instruções para os browsers mais comuns:</p>
            <ul>
              <li>
                <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">
                  Google Chrome
                </a>
              </li>
              <li>
                <a href="https://support.mozilla.org/pt-PT/kb/cookies-informacao-que-websites-guardam-no-computador" target="_blank" rel="noopener noreferrer">
                  Mozilla Firefox
                </a>
              </li>
              <li>
                <a href="https://support.apple.com/pt-pt/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer">
                  Safari
                </a>
              </li>
              <li>
                <a href="https://support.microsoft.com/pt-pt/microsoft-edge/eliminar-cookies-no-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer">
                  Microsoft Edge
                </a>
              </li>
            </ul>
          </section>

          <section className="legal-secao">
            <h2>5. Consentimento</h2>
            <p>
              Ao navegar no nosso website, será apresentado um banner de cookies onde poderá aceitar ou
              rejeitar a utilização de cookies não essenciais. O seu consentimento é registado e pode ser
              alterado a qualquer momento.
            </p>
            <p>
              Pode retirar o seu consentimento a qualquer momento limpando os cookies do seu browser
              ou contactando-nos diretamente.
            </p>
          </section>

          <section className="legal-secao">
            <h2>6. Alterações a Esta Política</h2>
            <p>
              A Lactifoz pode atualizar esta Política de Cookies periodicamente para refletir alterações
              nos cookies que utilizamos ou por outras razões operacionais, legais ou regulamentares.
              Recomendamos que visite esta página regularmente.
            </p>
          </section>

          <section className="legal-secao">
            <h2>7. Contacto</h2>
            <p>
              Para mais informações sobre a nossa utilização de cookies, contacte-nos:
            </p>
            <ul>
              <li><strong>Email:</strong> geral@lactifoz.pt</li>
              <li><strong>Telefone:</strong> 236 950 991 / 913 734 105</li>
              <li><strong>Morada:</strong> Rua do Centro Social Nº 4, 3105-057 Carriço, Portugal</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
