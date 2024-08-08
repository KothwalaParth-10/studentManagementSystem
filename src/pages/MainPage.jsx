import { useLocation } from 'react-router-dom'
import User from '../components/User';
import Admin from '../components/Admin';

function MainPage() {
  const location=useLocation()
  const users=location.pathname.split("/").at(-2);
  return (
    <div>
      {
        users === "true"?(<Admin></Admin>):(<User></User>)
      }
    </div>
  )
}

export default MainPage