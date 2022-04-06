import Navbar from './components/Navbar';
import './App.css'
import {Route, Routes} from 'react-router-dom';
import Home from './components/screens/Home';
import Profile from './components/screens/Profile';
import Login from './components/screens/Login';
import Signup from './components/screens/Signup';
import CreatePost from './components/screens/CreatePost';
 
function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      
      <Route exact path='/' element={<Home/>} />
      <Route exact path='/profile' element={<Profile/>} />
      <Route exact path='/login' element={<Login/>} />
      <Route exact path='/Signup' element={<Signup/>} />
      <Route exact path='/createpost' element={<CreatePost/>} />
      
    </Routes>
    </>
  )
}

export default App;
