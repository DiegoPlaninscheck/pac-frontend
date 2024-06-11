import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home';
import CadastroUsuarioPage from "./pages/UserRegisterPage";
import './App.css';
import EmployeePage from './pages/EmployeePage';
import PreRegistrationPage from './pages/PreRegistrationPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path='/funcionario' element={<CadastroUsuarioPage />} />
        <Route exact path='/pre-matricula' element={<PreRegistrationPage />} />
        <Route exact path='/acesso-usuario' element={<EmployeePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
