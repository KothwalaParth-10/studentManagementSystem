
import './App.css';
import { Route, Routes } from 'react-router-dom';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import { useState } from 'react';
import PrivateDash from './components/PrivateDash';
import MainPage from './pages/MainPage'

function App() {
  const [isLogedin,setisLogedin] = useState(false);
  const [user,setAdmin]=useState("");
  return (
    <div className="App">

      <Routes>
        <Route path='/signup' element={<SignUpPage isLogedin={isLogedin} setisLogedin={setisLogedin} ></SignUpPage>}></Route>
        <Route path='/' element={<LoginPage isLogedin={isLogedin} setAdmin={setAdmin} setisLogedin={setisLogedin}></LoginPage>}></Route>
        <Route path='/mainPage/:name' element={
          <PrivateDash isLogedin={isLogedin} setisLogedin={setisLogedin}>
            <MainPage user={user}></MainPage>
          </PrivateDash>
        }></Route>
      </Routes>

    </div>
  );
}

export default App;
