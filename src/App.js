import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from '../src/pantallas/MainPage';
import RecetaFunction from "./pantallas/RecetaFunction";
import RecetasPorFiltroPage from "./pantallas/RecetasPorFiltroPage";
import LoginPage from "./pantallas/LoginPage";
import RegisterPage from "./pantallas/RegisterPage";
import AcercaDe from "./components/AcercaDe";
import MiPerfilPage from "./components/MiPerfil"
import RecetaPage from "./pantallas/RecetaPage";
import Cookies from 'universal-cookie';
import EditarReceta from "./components/EditarReceta";
import MisRecetasPage from "./pantallas/MisRecetasPage";
import "./App.css";
import CargarRecetaPage from "./pantallas/CargarRecetaPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage/>} />
        <Route path='/receta/:id_receta' element={<RecetaFunction/>} />
        <Route path='/recetas/:id' element={<RecetasPorFiltroPage/>} />
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/register' element={<RegisterPage/>}/>
        <Route path='/acerca_de_cookit' element={<AcercaDe />}/>
        <Route path='/mi_perfil' element={<MiPerfilPage />}/>
        <Route path='/crear_receta' element={<CargarRecetaPage />}/>
        <Route path='/mis_recetas' element={<MisRecetasPage />}/>
        <Route path='/editar' element={<EditarReceta />}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
