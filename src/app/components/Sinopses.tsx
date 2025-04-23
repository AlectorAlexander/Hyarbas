import { useState } from 'react';
import styles from '../styles/sinopses.module.css';
import { ModalSinopsesProps } from '@/types/types';

const livros = [
  {
    capa: "/amorosos_enigmas.jpg",
    titulo: "Amorosos Enigmas: Romance Espirita",
    frase: "“Você sabe o que é o Amor? Não sabe. Nem eu.”",
    sinopse: "Jesus sabe, e também sabe quando e onde plantar...",
    link: "https://www.amazon.com.br/Amorosos-Enigmas-Hyarbas-Olavo-Ferreira-ebook/dp/B01M7XQFE7"
  },
  {
    capa: "/entrevistando_kardec.jpg",
    titulo: "Entrevistando Kardec VOL. I",
    frase: "“E, ao percebermos o Novo Reino...”",
    sinopse: "Contudo, para que O LIVRO DOS ESPÍRITOS...",
    link: "https://www.amazon.com.br/stores/Hyarbas-Olavo-Ferreira/author/B0CM6NPD9S"
  },
  {
    capa: "/lubia.jpg",
    titulo: "Lubia",
    frase: "“Menina enigmática, essa...”",
    sinopse: "Porque aí, assim preparada de esmero...",
    link: "https://www.amazon.com.br/L%C3%BAbia-Hyarbas-Olavo-Ferreira-ebook/dp/B01MDUK7B0"
  },
  {
    capa: "/vila_rica.jpg",
    titulo: "Vila Rica: Psicografia de CYR AYRES",
    frase: "“Barros, como Senhor de escravos...”",
    sinopse: "Foi parar no Vale dos Suicidas...",
    link: "https://www.amazon.com.br/Vila-Rica-Psicografia-AYRES-HEMETRIO-ebook/dp/B08KBR78HQ"
  },
  {
    capa: "/retrospecto.jpg",
    titulo: "Retrospecto",
    frase: "“Hoje é 21/mai/2018...”",
    sinopse: "Não sei se vou chegar a um epílogo...",
    link: "https://www.amazon.com.br/Retrospecto-Mem%C3%B3rias-atualizadoras-do-espiritismo-ebook/dp/B084Q8NKNY"
  },
  {
    capa: "/alem_da_visao.jpg",
    titulo: "Além da Visão",
    frase: "“Esta é boa. Eles vieram de outra galáxia...”",
    sinopse: "Você já ouviu falar de Lemúria? Então...",
    link: "https://www.amazon.com.br/Al%C3%A9m-Vis%C3%A3o-Hyarbas-Olavo-Ferreira-ebook/dp/B01M1ESH80"
  },
  {
    capa: "/zeths_quartena.jpg",
    titulo: "Zeths Quartena",
    frase: "“Pelo que eu pude ver da figura do sarcófago...”",
    sinopse: "Dizia-se que Zeths enxergava além das paredes...",
    link: "https://www.amazon.com.br/Zeths-Quartena-Hyarbas-Olavo-Ferreira-ebook/dp/B01LX6O0VE"
  }
];

export default function ModalSinopses({ isOpen, onClose }: ModalSinopsesProps) {
  const [pagina, setPagina] = useState(0);
  const [busca, setBusca] = useState('');
  const livrosPorPagina = 4;

  const livrosFiltrados = livros.filter(livro =>
    livro.titulo.toLowerCase().includes(busca.toLowerCase())
  );

  const totalPaginas = Math.ceil(livrosFiltrados.length / livrosPorPagina);
  const livrosPaginaAtual = livrosFiltrados.slice(pagina * livrosPorPagina, (pagina + 1) * livrosPorPagina);

  // Resetar para página 0 se busca mudar
  const handleBusca = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBusca(e.target.value);
    setPagina(0);
  };

  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button className={styles.fechar} onClick={onClose}>X</button>
        <h2>Sinopses</h2>

        <div className={styles.buscaDiv}>
        <input
          type="text"
          placeholder="Buscar por título..."
          value={busca}
          onChange={handleBusca}
          className={styles.inputBusca}
        />
        </div>

        <div className={styles.lista}>
          {livrosPaginaAtual.map((livro, index) => (
            <div key={index} className={styles.livro}>
              <img src={livro.capa} alt={`Capa do livro ${index + 1}`} className={styles.capa} />
              <div className={styles.info}>
                <h3>{livro.titulo}</h3>
                <p className={styles.frase}><i>{livro.frase}</i></p>
                <p className={styles.sinopse}>{livro.sinopse}</p>
                <div className={styles.links}>
                  <a href={livro.link} target="_blank" rel="noreferrer">Saber Mais / Comprar na Amazon</a>
                </div>
              </div>
            </div>
          ))}
        </div>
        {livrosFiltrados.length > livrosPorPagina && (
          <div className={styles.paginacao}>
            <button onClick={() => setPagina(p => Math.max(p - 1, 0))} disabled={pagina === 0}>Anterior</button>
            <span>Página {pagina + 1} de {totalPaginas}</span>
            <button onClick={() => setPagina(p => Math.min(p + 1, totalPaginas - 1))} disabled={pagina === totalPaginas - 1}>Próxima</button>
          </div>
        )}
      </div>
    </div>
  );
}
