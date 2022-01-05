import './App.css';
import React from 'react';
import { BrowserRouter, Route ,Switch} from 'react-router-dom';
import HomePage from './component/Homepage/HomePage.js'
import Navbar from './component/Navbar/Navbar'
// import Login from './component/Login/Login';
import favorite from './component/Favorit/Favorite';
import Recipe from './component/Recipe/Recipe';
import Search1 from './component/Search/Search1';
import Details from './component/Details/details'
import {Provider} from './provider'

import Add from './component/AddRecpie/Add';


function App() {

  return (
    <Provider>
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      {/* <Login/> */}
      <Switch>
      <Route path='/'  exact component={HomePage}/>
      <Route path='/favorite' exact  component={favorite}/>
      <Route path='/Recipe' exact  component={Recipe}/>
      <Route path='/Search' exact  component={Search1}/>
      <Route path='/Details/:id' exact component={Details}/>   
      <Route path='/Add' exact  component={Add}/>
      </Switch>
      </BrowserRouter>
    </div>
    </Provider>
 
  );
}

export default App;
