
import { Outlet } from 'react-router-dom';
import Header from 'componentes/header';
import stylesTema from 'styles/Tema.module.scss';

export default function PaginaPadrao(){
  return (
    <>
      <Header/>
      <div className={stylesTema.container}>
        <Outlet/>
      </div>
    </>
  );
}