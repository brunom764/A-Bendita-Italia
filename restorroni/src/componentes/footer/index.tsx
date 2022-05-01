import styles from './Footer.module.scss';
import Logo  from '../../assets/logoFooter.png';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <img src={Logo} className={styles.logo}/>
    </footer>
  );
}