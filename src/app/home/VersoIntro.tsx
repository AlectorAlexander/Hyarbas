import versos from '../styles/ versos.module.css';

export default function VersoIntro() {
  return (
    <div className={versos.versos}>
      <img src="/verso.svg" className={versos.versoImage} alt="Verso" />
    </div>
  );
}
