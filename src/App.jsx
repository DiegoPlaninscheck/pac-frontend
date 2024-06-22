import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home';
import CadastroUsuarioPage from "./pages/CadastroUsuario";
import './App.css';
import VisualizarPreMatricula from './pages/VisualizarPreMatricula';
import PreMatriculaFinal from './pages/PreMatriculaFinal';
import PreMatricula from './pages/PreMatricula';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path='/cadastro-usuario' element={<CadastroUsuarioPage />} />
        <Route exact path='/visualizar-pre-matricula' element={<VisualizarPreMatricula />} />
        <Route exact path='/pre-matricula-final' element={<PreMatriculaFinal />} />
        <Route exact path='/pre-matricula' element={<PreMatricula />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
