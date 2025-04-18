// components/HomeIndex.tsx
import styles from '../styles/homeindex.module.css';

export default function HomeIndex() {
  return (
    <section id="home" className={styles.container}>
      <div className={styles.left}>
        <h1>Hyarbas O. Ferreira</h1>
        <nav className={styles.menu}>
          <a href="#sinopses">Sinopses</a>
          <a href="#pronunciamento">Pronunciamento</a>
          <a href="#depoimento">Depoimento</a>
          <a href="#criticas">Críticas Literárias</a>
          <a href="#amazon">Obras na Amazon</a>
        </nav>
      </div>
      <div className={styles.right}>
        <img className={styles.foto} src='/hyarbas.jpeg' alt="Foto do autor" layout="responsive" />
      </div>
    </section>
  );
}
