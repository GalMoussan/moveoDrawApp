import './App.css';
import Welcome from './pages/Welcome';
import ChoicePage from './pages/ChoicePage';
import DrawPage from './pages/DrawPage';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom'
import Waiting from './pages/Waiting';
import  AppRoutes from './types/Routes'
import GuessPage from './pages/GuessPage';
import LoginPage from './pages/LoginPage';

function App() {

  return (
    <div>
      <div>
        <Header/>
      </div>

      {/* Routes for the entire app */}
      <Routes>
        <Route path={AppRoutes.Login} element={<LoginPage />} />
        <Route path={AppRoutes.Welcome} element={<Welcome />} />
        <Route path={AppRoutes.Choice} element={<ChoicePage />} />
        <Route path={AppRoutes.Draw} element={<DrawPage />} />
        <Route path={AppRoutes.Wating} element={<Waiting />} />
        <Route path={AppRoutes.Guess} element={<GuessPage />} />
      </Routes>
    </div>
  );
}

export default App;
