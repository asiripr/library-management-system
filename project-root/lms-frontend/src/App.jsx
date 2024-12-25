import { Router, Route, Navigate, Routes } from 'react-router-dom';
import Home from './pages/DashBoardPage';
import Login from './components/auth/Login';
import NotFound from './components/error/NotFound';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate to={'/home'} />}></Route>
      <Route path='/home' element={<Home />}></Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='*' element={<NotFound />}></Route>
    </Routes>
  );
};

export default App;