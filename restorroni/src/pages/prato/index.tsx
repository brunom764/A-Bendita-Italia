/* eslint-disable react/prop-types */
import styles from './Prato.module.scss'; 
import cardapio from 'data/cardapio.json';
import { useParams, useNavigate } from 'react-router-dom';
import TagsPrato from 'componentes/tagsPrato';
import NotFound from 'pages/notFound';
import { Modal, Button, ModalProps } from 'react-bootstrap';
import React from 'react';
import { Omit, BsPrefixProps } from 'react-bootstrap/esm/helpers';
import Formulario from 'componentes/comprar';


function MyVerticallyCenteredModal(props: JSX.IntrinsicAttributes & Omit<Pick<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof React.HTMLAttributes<HTMLDivElement>> & { ref?: ((instance: HTMLDivElement | null) => void) | React.RefObject<HTMLDivElement> | null | undefined; }, BsPrefixProps<"div"> & ModalProps> & BsPrefixProps<"div"> & ModalProps & { children?: React.ReactNode; }) {
  const { id } = useParams();
  const prato = cardapio.find(item => item.id ===  Number(id));
  if (!prato){
    return <NotFound/>;
  }
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          <h2 className={styles.titulo}>{prato.title}</h2>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Formulario/>
      </Modal.Body>
      <Modal.Footer>
        <Button className={styles.voltar} onClick={props.onHide}>{'< Voltar'}</Button>
      </Modal.Footer>
    </Modal>
  );
}



export default function Prato() {
  const [modalShow, setModalShow] = React.useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const prato = cardapio.find(item => item.id ===  Number(id));
  if (!prato){
    return <NotFound/>;
  }

  return (
    <>
      <button className={styles.voltar} onClick={() => navigate(-1)}>
        {'< Voltar'}
      </button>
      <section className={styles.container}>
        <h1 className={styles.titulo}>
          {prato.title}
        </h1>
        <div className={styles.imagem}>
          <img src={prato.photo} alt={prato.title} />
        </div>
        <div className={styles.conteudo}>
          <p className={styles.conteudo__descricao}>
            {prato.description}
          </p>
          <TagsPrato {...prato}/>
        </div>
        <div className={styles.container}>
          <Button className={styles.btnComprar} variant="primary" onClick={() => setModalShow(true)}>
          Comprar
          </Button>
          <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}/>
        </div>
      </section>
    </>
  );
}