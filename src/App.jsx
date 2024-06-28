import { createContext } from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage';
import UserRegisterPage from './pages/UserRegisterPage';
import PreMatriculaPage from './pages/PreMatriculaPage';
import PreMatriculaFinalPage from './pages/PreMatriculaFinalPage';
import HomeUserPage from './pages/HomeUserPage';
import VisualizarPreMatriculaPage from './pages/VisualizarPreMatriculaPage';
import AgendamentoMatriculaPage from './pages/AgendamentoMatriculaPage';

import './App.css';

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/usuario" element={<UserRegisterPage />} />
        <Route exact path='/pre-matricula' element={<PreMatriculaPage />} />
        <Route exact path='/pre-matricula-final' element={<PreMatriculaFinalPage />} />
        <Route exact path='/home-usuario' element={<HomeUserPage />} />
        <Route exact path='/visualizar-pre-matricula' element={<VisualizarPreMatriculaPage />} />
        <Route exact path='/agendar-matricula' element={<AgendamentoMatriculaPage />} />
        {/* <Route exact path='/cadastro-usuario' element={<CadastroUsuarioPage />} /> */}
        {/* <Route exact path='/pre-matricula' element={<PreRegistrationPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
