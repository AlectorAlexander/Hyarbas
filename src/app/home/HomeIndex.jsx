// components/HomeIndex.tsx
import { useEffect, useState } from 'react';
import MaquinaComAnimacao from '../components/MaquinaComAnimacao';
import styles from '../styles/homeindex.module.css';
import ModalSinopses from '../components/Sinopses';

export default function HomeIndex() {
  const [widthSize, setWidthSize] = useState(0);
  const [firstAspas, setFirstAspas] = useState("/aspas _Prancheta 1.png");
  const [secondAspas, setSecondAspas] = useState("/aspas -02.png");
  const [modalAberto, setModalAberto] = useState(false)
  useEffect(() => {
    const handleResize = () => {
        setWidthSize(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
        window.removeEventListener('resize', handleResize);
    };
}, [])

  useEffect(() => {
      if (widthSize < 830) {
          setFirstAspas("/aspas -02.png");
          setSecondAspas("/aspas _Prancheta 1.png");
      } else {
          setFirstAspas("/aspas _Prancheta 1.png");
          setSecondAspas("/aspas -02.png");
      }
  }, [widthSize]);


  return (
    <section id="home" className={styles.container}>
      <div className={styles.left}>
        <h1>Hyarbas O. Ferreira</h1>

        <div className={styles.conteinerMenuAspas}>
        <img className={styles.aspas} src={firstAspas} alt="aspas imagem" layout="responsive" />
        <nav className={styles.menu}>
          <a href="#pronunciamento">Pronunciamento</a>
          <a href="#depoimento">Depoimento</a>
          <a href="#criticas">Críticas Literárias</a>
          <a onClick={() => setModalAberto(true)}>Sinopses e Obras na Amazon</a>
        </nav>
        </div>
      </div>
      <div className={styles.right}>
        <MaquinaComAnimacao />
        <img className={styles.aspas2} src={secondAspas} alt="aspas imagem" layout="responsive" />

      </div>
      <ModalSinopses isOpen={modalAberto} onClose={() => setModalAberto(false)} />
    </section>
  );
}
