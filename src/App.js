import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import {Routes , Route} from 'react-router-dom'
import Movies from './Movies';
import Tv from './Tv';
import Login from './Login';
import Home from './Home';
import Register from './Register';
import People from './People';
import Notfound from './Notfound';

function App() {
  return ( <div>
      <Navbar />
      <div>
      <Routes>
      <Route path="home" element={<Home/>}></Route>
      <Route path="" element={<Home/>}></Route>
      <Route path="movies" element={<Movies/>}></Route>
      <Route path="tv" element={<Tv/>}></Route>
      <Route path="login" element={<Login/>}></Route>
      <Route path="register" element={<Register/>}></Route>
      <Route path="people" element={<People/>}></Route>
      <Route path="*" element={<Notfound/>}></Route>
      </Routes>
      </div>
      <Register/>
      
    </div>
 
    
     
  );
}

export default App;
