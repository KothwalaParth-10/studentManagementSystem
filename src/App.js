
import './App.css';
import { Route, Routes } from 'react-router-dom';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <div className="App">
     
      <Routes>
        <Route path='/smp/signup' element={<SignUpPage></SignUpPage>}></Route>
        <Route path='/' element={<LoginPage></LoginPage>}></Route>
      </Routes>
     
    </div>
  );
}

export default App;
