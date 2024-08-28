import User from '../components/User';
import Admin from '../components/Admin';

function MainPage({user}) {
  return (
    <div>
      {
        user === "true"?(<Admin></Admin>):(<User></User>)
      }
    </div>
  )
}

export default MainPage