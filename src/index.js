import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import BasicExample from './components/Header';
import FigureExample from './components/about';
import ControlledCarousel from './components/article';
import Footer from './components/footer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
  <BasicExample />
  <App/>
  <FigureExample />
  <ControlledCarousel />
  <Footer />
  </div>
);

