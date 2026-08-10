import './legal.css';

export const metadata = {
  title: 'Termos e Condições',
  description: 'Termos e condições de utilização do website da Lactifoz, S.A.',
};

export default function TermosCondicoes() {
  return (
    <div className="legal-pagina">
      <div className="container">
        <div className="legal-conteudo">
          <h1 className="legal-titulo">Termos e Condições de Utilização</h1>
          <p className="legal-atualizacao">Última atualização: Janeiro 2025</p>

          <section className="legal-secao">
            <h2>1. Identificação do Titular do Website</h2>
            <p>
              O presente website é propriedade e operado pela <strong>Lactifoz — Transformação e Comércio de Peixes e Marisco, S.A.</strong>,
              com sede na Rua do Centro Social Nº 4, 3105-057 Carriço, Portugal.
            </p>
            <p>
              <strong>Email:</strong> geral@lactifoz.pt<br />
              <strong>Telefone:</strong> 236 950 991 / 913 734 105
            </p>
          </section>

          <section className="legal-secao">
            <h2>2. Aceitação dos Termos</h2>
            <p>
              Ao aceder e utilizar este website, o utilizador aceita ficar vinculado aos presentes Termos e Condições
              de Utilização, bem como à nossa Política de Privacidade e Política de Cookies. Caso não concorde com
              algum dos termos aqui estabelecidos, deverá abster-se de utilizar este website.
            </p>
          </section>

          <section className="legal-secao">
            <h2>3. Utilização do Website</h2>
            <p>O utilizador compromete-se a utilizar este website de forma lícita e responsável, nomeadamente:</p>
            <ul>
              <li>Não utilizar o website para fins ilegais ou não autorizados</li>
              <li>Não tentar aceder a áreas restritas ou sistemas informáticos da Lactifoz</li>
              <li>Não transmitir vírus, malware ou qualquer código de natureza destrutiva</li>
              <li>Não reproduzir, duplicar ou explorar comercialmente qualquer parte do website sem autorização prévia</li>
              <li>Fornecer informações verdadeiras e atualizadas quando solicitadas</li>
            </ul>
          </section>

          <section className="legal-secao">
            <h2>4. Propriedade Intelectual</h2>
            <p>
              Todos os conteúdos presentes neste website — incluindo, mas não se limitando a, textos, imagens,
              logótipos, gráficos, vídeos, design, marcas registadas e software — são propriedade da Lactifoz
              ou dos respetivos titulares e encontram-se protegidos pelas leis de propriedade intelectual e
              direitos de autor aplicáveis em Portugal e na União Europeia.
            </p>
            <p>
              É expressamente proibida a reprodução, distribuição, modificação ou utilização de qualquer conteúdo
              deste website sem autorização prévia e escrita da Lactifoz.
            </p>
          </section>

          <section className="legal-secao">
            <h2>5. Informação sobre Produtos</h2>
            <p>
              A Lactifoz esforça-se por manter a informação sobre os seus produtos atualizada e correta.
              No entanto, as imagens e descrições apresentadas neste website são meramente ilustrativas,
              podendo existir variações relativamente aos produtos reais.
            </p>
            <p>
              A disponibilidade dos produtos está sujeita a alterações sem aviso prévio, dependendo
              de fatores como a sazonalidade e a oferta disponível.
            </p>
          </section>

          <section className="legal-secao">
            <h2>6. Links Externos</h2>
            <p>
              Este website poderá conter links para websites de terceiros. A Lactifoz não controla nem é
              responsável pelo conteúdo, políticas de privacidade ou práticas de websites externos.
              A inclusão de links para websites de terceiros não implica a aprovação ou endosso dos mesmos
              por parte da Lactifoz.
            </p>
          </section>

          <section className="legal-secao">
            <h2>7. Limitação de Responsabilidade</h2>
            <p>
              A Lactifoz envida os melhores esforços para manter o website acessível e funcional.
              No entanto, não garante que o website estará disponível de forma ininterrupta ou isento de erros.
            </p>
            <p>A Lactifoz não será responsável por:</p>
            <ul>
              <li>Danos diretos ou indiretos resultantes da utilização ou impossibilidade de utilização do website</li>
              <li>Eventuais imprecisões ou erros nos conteúdos publicados</li>
              <li>Interrupções no serviço por motivos de manutenção, falhas técnicas ou causas de força maior</li>
              <li>Danos causados por vírus ou outros componentes prejudiciais</li>
            </ul>
          </section>

          <section className="legal-secao">
            <h2>8. Resolução de Litígios</h2>
            <p>
              Em caso de litígio decorrente da utilização deste website, o utilizador pode recorrer
              a mecanismos de resolução alternativa de litígios. Para mais informações, consulte o
              portal do consumidor em{' '}
              <a href="https://www.consumidor.gov.pt" target="_blank" rel="noopener noreferrer">www.consumidor.gov.pt</a>.
            </p>
            <p>
              Os presentes Termos e Condições são regidos pela legislação portuguesa.
              Para a resolução de qualquer litígio emergente destes termos será competente
              o foro da comarca da sede da Lactifoz.
            </p>
          </section>

          <section className="legal-secao">
            <h2>9. Alterações aos Termos</h2>
            <p>
              A Lactifoz reserva-se o direito de modificar os presentes Termos e Condições a qualquer momento,
              sem aviso prévio. As alterações entram em vigor imediatamente após a sua publicação neste website.
              Recomendamos que consulte esta página periodicamente para se manter atualizado.
            </p>
          </section>

          <section className="legal-secao">
            <h2>10. Contacto</h2>
            <p>
              Para quaisquer questões sobre os presentes Termos e Condições, contacte-nos:
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
