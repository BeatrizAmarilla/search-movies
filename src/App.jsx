import { BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./components/static/Header";
import ContainHome from "./views/ContainHome";
import UltimosLanzamientos from "./views/UltimosLanzamientos";
import Populares from "./views/Populares";
import Buscar  from "./views/Buscar";


function App() {
  return (
    <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<ContainHome/>} />
          <Route path="/ultimosLanzamientos" element={<UltimosLanzamientos/>} />
          <Route path="/populares" element={<Populares />} />
          <Route path="/buscar " element={<Buscar />} />
          <Route path="*" element={<h2>ERROR 404 NOT FOUND</h2>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;


