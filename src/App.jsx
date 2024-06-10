import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import './App.css';
import UserRegister from './pages/UserRegisterPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/funcionario" element={<UserRegister />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
