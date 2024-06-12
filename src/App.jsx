import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home';
import CadastroUsuarioPage from "./pages/CadastroUsuario";
import './App.css';
import VisualizarPreMatricula from './pages/VisualizarPreMatricula';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path='/cadastro-usuario' element={<CadastroUsuarioPage />} />
        <Route exact path='/visualizar-pre-matricula' element={<VisualizarPreMatricula />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
