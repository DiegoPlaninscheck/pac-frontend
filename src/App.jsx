import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
