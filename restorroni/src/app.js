
import Footer from "componentes/footer";
import Menu from "componentes/menu";
import Cardapio from "pages/cardapio";
import Inicio from "pages/inicio";
import PaginaPadrao from "pages/paginaPadrao";
import Sobre from "pages/sobre";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "pages/notFound";
import Prato from "pages/prato";



export default function AppRouter() {
  return (
    <main className="container">
      <Router>
        <Menu/>
        <Routes>
          <Route path="/" element={<PaginaPadrao />}>
            <Route index element={<Inicio />} />
            <Route path='/cardapio' element={<Cardapio />} />
            <Route path='/sobre' element={<Sobre />} /> 
            <Route path= 'prato/:id' element={<Prato />} />
          </Route>
          <Route path= '*' element ={<NotFound />} />
        </Routes>
        <Footer/>
      </Router>
    </main>
  );
}