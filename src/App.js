import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from '../src/pantallas/MainPage';
import RecetaFunction from "./pantallas/RecetaFunction";
import RecetaPage from "./pantallas/RecetaPage";
import Cookies from 'universal-cookie';
import "./App.css";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage/>} />
        <Route path='/receta/:id_receta' element={<RecetaFunction/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
