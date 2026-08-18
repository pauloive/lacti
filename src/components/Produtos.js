import Image from 'next/image';
import './Produtos.css';

const produtos = [
  {
    id: 1,
    titulo: 'Peixe Inteiro, Posta, Granel, emb. Saco kg e Covete',
    badge: 'Seleção Diária',
    descricao:
      'Do mar diretamente à sua mesa. Selecionamos cada dia os melhores exemplares, garantindo frescura máxima e qualidade em toda a nossa gama de peixe fresco.',
    itens: ['Pescada', 'Dourada', 'Robalo', 'Salmão', 'Bacalhau fresco'],
    imagem: '/images/produtos/peixe-fresco.jpg',
    mostrarNumero: false,
  },
  {
    id: 2,
    titulo: 'Mariscos, Crustáceos e Moluscos',
    badge: 'Produto Premium',
    descricao:
      'Uma seleção rigorosa dos melhores mariscos da costa portuguesa. Camarão, amêijoa, sapateira e muito mais, sempre frescos e prontos a saborear.',
    itens: ['Camarão', 'Amêijoa', 'Sapateira', 'Lagostim'],
    imagem: '/images/produtos/marisco.jpg',
    mostrarNumero: false,
  },
  {
    id: 3,
    titulo: 'Charcutaria, Enlatados, Lacticínios',
    badge: 'Tradição Portuguesa',
    descricao:
      'Uma seleção completa de charcutaria, enlatados e laticínios de qualidade, pensada para complementar a sua oferta com produtos de conveniência e sabor garantido.',
    itens: ['Fiambre', 'Chouriço', 'Atum enlatado', 'Queijo', 'Manteiga'],
    imagem: '/images/produtos/charcutaria-lacticinios.jpg',
    mostrarNumero: false,
  },
  {
    id: 4,
    titulo: 'Carnes Congeladas',
    badge: 'Frescura Preservada',
    descricao:
      'Tecnologia de congelação de última geração que preserva toda a frescura, textura e valor nutritivo dos nossos produtos. Qualidade garantida em cada embalagem.',
    itens: ['Bovino', 'Suíno', 'Frango', 'Peru'],
    imagem: '/images/produtos/carnes-congeladas.jpg',
    mostrarNumero: false,
  },
  {
    id: 5,
    titulo: 'Pré-Cozinhados, Panados',
    badge: 'Pronto a Servir',
    descricao:
      'Uma gama variada de produtos pré-cozinhados e panados, práticos e saborosos, prontos a preparar em poucos minutos — a solução ideal para o dia a dia.',
    itens: ['Douradinhos', 'Filetes panados', 'Bolinhos de bacalhau', 'Rissóis', 'Croquetes'],
    imagem: '/images/produtos/pre-cozinhados-panados.jpg',
    mostrarNumero: false,
  },
];

function ProductCard({ produto, invertido }) {
  return (
    <article className={`produto-card${invertido ? ' invertido' : ''} revelar`}>

      <div className="produto-imagem">
        <Image
          src={produto.imagem}
          alt={produto.titulo}
          fill
          sizes="(max-width: 900px) 100vw, 50vw"
          className="produto-imagem-foto"
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
        <span className="produto-badge">{produto.badge}</span>
      </div>

      <div className="produto-conteudo">
        {produto.mostrarNumero !== false && (
          <span className="produto-numero">0{produto.id}</span>
        )}
        <h3 className="produto-titulo">{produto.titulo}</h3>
        <p className="produto-descricao">{produto.descricao}</p>
        <ul className="produto-lista" aria-label={`Exemplos de ${produto.titulo}`}>
          {produto.itens.map((item) => (
            <li key={item} className="produto-lista-item">{item}</li>
          ))}
        </ul>
        <a href="#localizacao" className="produto-cta">
          Saber Mais
          <span className="produto-cta-seta" aria-hidden="true">→</span>
        </a>
      </div>

    </article>
  );
}

export default function Produtos() {
  return (
    <section className="produtos secao" id="produtos">
      <div className="container">

        <div className="produtos-cabecalho revelar">
          <span className="sobre-etiqueta">Os Nossos Produtos</span>
          <div className="linha-dourada" />
          <h2 className="secao-titulo">Qualidade em Cada Categoria</h2>
          <p className="secao-subtitulo">
            Da captura à sua mesa — uma gama completa de produtos do mar
            selecionados com rigor e paixão pela qualidade.
          </p>
        </div>

        <div>
          {produtos.map((produto, index) => (
            <ProductCard
              key={produto.id}
              produto={produto}
              invertido={index % 2 !== 0}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
