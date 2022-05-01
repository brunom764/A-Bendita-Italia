import Logo  from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import styles from './Menu.module.scss';


export default function Menu() {
  const rotas = [{
    label: 'Início',
    to: '/'
  }, {
    label: 'Cardápio',
    to: '/cardapio'
  }, {
    label: 'Sobre',
    to: '/sobre'
  }];
  return (
    <nav className={styles.menu}>
      <img src={Logo} className={styles.logo}/>
      <ul className={styles.menu__list}>
        {rotas.map((rota, index) => (
          <li key={index} className={styles.menu__link} > 
            <Link to={rota.to}>
              {rota.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}