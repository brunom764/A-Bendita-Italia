import styles from './Sobre.module.scss';
import stylesTema from 'styles/Tema.module.scss';
import casa from 'assets/casa.png';
import massa1 from 'assets/massa1.png';
import massa2 from 'assets/massa2.png';

export default function Sobre() { 
  const imagens = [massa1, massa2];
  return (
    <section>
      <h3 className={stylesTema.titulo}> Sobre </h3> 
      <div className={styles.sobreNos}>
        <img src={casa} alt="Casa A Bendita Italia" />
        <div className={styles.sobreNos__texto}>
          <p>   
            Nós do A Bendita Italia oferecemos a vocês, nossos queridos clientes, a Massa Italiana Caseira mais saborosa e sofisticada de São Paulo! Prezamos pelos ingredientes tradicionais da culinária Italiana, frescos e de excelente qualidade para que sua experiência seja ainda mais intensa!
          </p>
          <p>
        Também possuímos uma cardápio de carnes com muitas opções de acordo com o seu gosto!
          </p>
          <p>
            Para acompanhar as massas italianas, possuimos uma reserva de vinhos especiais, que harmonizam perfeitamente com o seu parto, seja carne ou massa!
          </p>
        </div>
      </div>
      <div className={styles.imagens}>
        {imagens.map((imagem, index) => (
          <div key={index} className={styles.imagens__imagem}>
            <img src={imagem} alt="imagem de massa" />
          </div>
        ))}
      </div>
    </section>
  );
}