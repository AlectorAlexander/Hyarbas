import Image from 'next/image'
import styles from '../styles/MaquinaComAnimacao.module.css'
import maquinaImg from '/public/hyarbas.jpg'

export default function MaquinaComAnimacao() {
  return (
    <div className={styles.wrapper}>
      <Image
        src={maquinaImg}
        alt="Hyarbas escrevendo"
        className={styles.foto}
        width={600}
        height={400}
        priority
      />

      <div className={styles.animacao}>
        {[...'escrever'].map((char, i) => (
          <span
            key={i}
            className={styles.letra}
            style={{ animationDelay: `${i * 0.4}s` }}
          >
            {char}
          </span>
        ))}
      </div>
      <div className={styles.animacao2}>
        {[...'Kardec'].map((char, i) => (
          <span
            key={i}
            className={styles.letra}
            style={{ animationDelay: `${i * 0.4}s` }}
          >
            {char}
          </span>
        ))}
      </div>
      <div className={styles.animacao3}>
        {[...'livre'].map((char, i) => (
          <span
            key={i}
            className={styles.letra}
            style={{ animationDelay: `${i * 0.4}s` }}
          >
            {char}
          </span>
        ))}
      </div>
      <div className={styles.animacao4}>
        {[...'livre'].map((char, i) => (
          <span
            key={i}
            className={styles.letra}
            style={{ animationDelay: `${i * 0.4}s` }}
          >
            {char}
          </span>
        ))}
      </div>
    </div>
  )
}
