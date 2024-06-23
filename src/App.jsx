import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home';
import CadastroUsuarioPage from "./pages/CadastroUsuario";
import VisualizarPreMatricula from './pages/VisualizarPreMatricula';
import PreMatriculaFinal from './pages/PreMatriculaFinal';
import PreMatricula from './pages/PreMatricula';
import HomePage from './pages/HomePage';
import UserRegister from './pages/UserRegisterPage';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path='/cadastro-usuario' element={<CadastroUsuarioPage />} />
        <Route exact path='/visualizar-pre-matricula' element={<VisualizarPreMatricula />} />
        <Route exact path='/pre-matricula-final' element={<PreMatriculaFinal />} />
        <Route exact path='/pre-matricula' element={<PreMatricula />} />
        <Route exact path="/funcionario" element={<UserRegister />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
