import React from 'react';
import StickyForm from './components/StickyForm';
import StickyList from './components/StickyList';
import Footer from './components/Footer';
import logo from './logo.svg';
import './App.css';

const App = () => ( 
  <div className="App">
    <StickyForm />
    <StickyList />
    <Footer />
  </div>
);


export default App;