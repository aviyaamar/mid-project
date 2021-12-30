import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import HomePage from './component/HomePage.js'
import Navbar from './component/Navbar.js'
import Login from './component/Login';
import favorite from './component/Favorite';
import Recipe from './component/Recipe';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Login/>
      <Route path='/' exac/>
      <Route path='/component/HomePage' exac component={HomePage}/>
      <Route path='/component/favorite' exac  component={favorite}/>
      <Route path='/component/Recipe' exac  component={Recipe}/>

      </BrowserRouter>
     
    
      
    </div>
  );
}

export default App;
