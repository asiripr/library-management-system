import { Route, Navigate, Routes } from 'react-router-dom';
import DashBoardPage from './pages/DashBoardPage';
// import Login from './components/auth/Login';
// import NotFound from './components/error/NotFound';



const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/home' />}></Route>
      <Route path='/home' element={<DashBoardPage />}></Route>
      {/* <Route path="/login" element={<Login />} />
      <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
};

export default App;