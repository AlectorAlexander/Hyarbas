import { Allura } from 'next/font/google';
import styles from '../styles/ versos.module.css';

const allura = Allura({
  subsets: ['latin'],
  weight: '400',
});

export default function VersoIntro() {
  return (
    <section className={` ${styles.versos} ${allura.className}`}>
      <p className={`animate__animated animate__pulse ${styles.texto}`}>
        O belo: aquilo que é agradável à vista e, por extensão, que inebria a todos os sentidos,
        a todas as emoções. O belo é a meta. Busca-se-o nos sons, na dicção, nas formas, nas cores...
        No extrato da dor, o amor.<br /><br />
        Contudo, há de haver conteúdo. O belo, revestido de belo. Um sem o outro, o outro sem o um
        são incompletos.
      </p>
    </section>
  );
}
