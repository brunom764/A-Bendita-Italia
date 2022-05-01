import styles from "./Cardapio.module.scss";
import Buscador from "./Buscador";
import { useState } from "react";
import Filtros from "pages/cardapio/filtros";
import Ordenador from "pages/cardapio/Ordenador";
import Itens from "pages/cardapio/Itens";
import stylesTema from 'styles/Tema.module.scss';


export default function Cardapio() {
  const [busca, setBusca] = useState("");
  const [filtro, setFiltro] = useState<number | null>(null);
  const [ordenador, setOrdenador] = useState("");
  return (
    <main>
      <section className={styles.cardapio}>
        <h3 className={stylesTema.titulo}>Cardápio</h3>
        <Buscador busca={busca} setBusca={setBusca} />
        <div className={styles.cardapio__filtros}>
          <Filtros filtro={filtro} setFiltro={setFiltro}  />
          <Ordenador ordenador={ordenador} setOrdenador={setOrdenador} />
        </div>
        <Itens busca={busca} filtro={filtro} ordenador={ordenador} />
      </section>
    </main>
  );
}