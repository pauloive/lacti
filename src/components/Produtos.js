import './Produtos.css';

const produtos = [
  {
    id: 1,
    titulo: 'Peixe Fresco',
    badge: 'Seleção Diária',
    descricao:
      'Do mar diretamente à sua mesa. Selecionamos cada dia os melhores exemplares, garantindo frescura máxima e qualidade certificada em toda a nossa gama de peixe fresco.',
    itens: ['Pescada', 'Dourada', 'Robalo', 'Salmão', 'Bacalhau fresco'],
    cor: 'peixe',
    icone: '🐟',
  },
  {
    id: 2,
    titulo: 'Marisco',
    badge: 'Produto Premium',
    descricao:
      'Uma seleção rigorosa dos melhores mariscos da costa portuguesa. Camarão, amêijoa, sapateira e muito mais, sempre frescos e prontos a saborear.',
    itens: ['Camarão', 'Amêijoa', 'Sapateira', 'Lagostim', 'Percebe'],
    cor: 'marisco',
    icone: '🦞',
  },
  {
    id: 3,
    titulo: 'Conservas',
    badge: 'Tradição Portuguesa',
    descricao:
      'A arte da conserva elevada ao máximo. Os nossos produtos em conserva preservam todo o sabor e os nutrientes do peixe, com receitas que respeitam a tradição portuguesa.',
    itens: ['Atum em azeite', 'Sardinha', 'Cavala', 'Polvo', 'Bacalhau em azeite'],
    cor: 'conservas',
    icone: '🥫',
  },
  {
    id: 4,
    titulo: 'Congelados',
    badge: 'Frescura Preservada',
    descricao:
      'Tecnologia de congelação de última geração que preserva toda a frescura, textura e valor nutritivo dos nossos produtos. Qualidade garantida em cada embalagem.',
    itens: ['Filetes de peixe', 'Miolo de camarão', 'Lulas', 'Polvo', 'Mix de mariscos'],
    cor: 'congelados',
    icone: '❄️',
  },
  {
    id: 5,
    titulo: 'Fumados',
    badge: 'Sabor Artesanal',
    descricao:
      'Técnicas artesanais de fumagem que conferem sabores únicos e intensos. Produtos de excelência para quem aprecia o melhor da gastronomia do mar.',
    itens: ['Salmão fumado', 'Truta fumada', 'Enguia fumada', 'Bacalhau fumado'],
    cor: 'fumados',
    icone: '🔥',
  },
];

function ProductCard({ produto, invertido }) {
  return (
    <article className={`produto-card${invertido ? ' invertido' : ''} revelar`}>

      <div className="produto-imagem">
        <div
          className={`produto-imagem-placeholder ${produto.cor}`}
          data-icone={produto.icone}
          role="img"
          aria-label={`Imagem de ${produto.titulo}`}
        />
        <span className="produto-badge">{produto.badge}</span>
      </div>

      <div className="produto-conteudo">
        <span className="produto-numero">0{produto.id}</span>
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
