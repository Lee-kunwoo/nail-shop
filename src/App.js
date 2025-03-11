import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Head from './com/Head';
import Nav from './com/Nav';
import Modal from './com/Modal';

import Home from './pages/Home';
import Cuticle from './pages/Cuticle';
import Handcream from './pages/Handcream';
import Nailhardener from './pages/Nailhardener';
import Nailserum from './pages/Nailserum'
import SalonLocation from './pages/SalonLocation'


function App() {
  return (
    <div className="App">
      <Head />
      <Nav />
      <Modal />      
      <Routes>
         <Route index element ={<Home />} />
         <Route path ='/Cuticle' element ={<Cuticle />} />
         <Route path ='/Handcream' element ={<Handcream />} />
         <Route path ='/Nailhardener' element ={<Nailhardener />} />
         <Route path ='/Nailserum' element ={<Nailserum />} />
         <Route path ='/SalonLocation' element ={<SalonLocation />} />
      </Routes>    
    </div>
  );
}

export default App;
