
import './App.css';
import { Route, Routes } from 'react-router-dom';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import { useState } from 'react';
import PrivateDash from './components/PrivateDash';
import MainPage from './pages/MainPage'

function App() {
  const [isLogedin,setisLogedin] = useState(false);
  return (
    <div className="App">

      <Routes>
        <Route path='/smp/signup' element={<SignUpPage isLogedin={isLogedin} setisLogedin={setisLogedin} ></SignUpPage>}></Route>
        <Route path='/' element={<LoginPage></LoginPage>}></Route>
        <Route path='/smp/mainPage' element={
          <PrivateDash isLogedin={isLogedin} setisLogedin={setisLogedin}>
            <MainPage></MainPage>
          </PrivateDash>
        }></Route>
      </Routes>

    </div>
  );
}

export default App;
