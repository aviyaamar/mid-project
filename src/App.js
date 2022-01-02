import './App.css';
import React, { useContext } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import HomePage from './component/Homepage/HomePage.js'
import Navbar from './component/Navbar/Navbar'
import Login from './component/Login/Login';
import favorite from './component/Favorit/Favorite';
import Recipe from './component/Recipe/Recipe';
import Search1 from './component/Search/Search1';
import Details from './component/Details/details'
import {Provider} from './provider'


function App() {

  return (
    <Provider>
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      {/* <Login/> */}
      <Route path='/' exac/>
      <Route path='/component/HomePage' exac component={HomePage}/>
      <Route path='/component/favorite' exac  component={favorite}/>
      <Route path='/component/Recipe' exac  component={Recipe}/>
      <Route path='/component/Search' exac  component={Search1}/>
      <Route path='/component/Details/' exac  component={Details}/>
      </BrowserRouter>
    </div>
    </Provider>
 
  );
}

export default App;
