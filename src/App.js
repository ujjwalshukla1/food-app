import React from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';

function App() {
  return (
    <div className="container mt-5">
      <div className="row mt-5">
        <div className="about col-lg-4 col-md-12">
          <div className='about-img col-sm-12'>
            <img className='img-fluid' src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGl6emElMjBzbGljZXxlbnwwfHwwfHw%3D&w=1000&q=80" />
            <img className='img-fluid1' src="https://lh3.googleusercontent.com/NuBXpE9js768VvskUG8HIZ7KJNVPDCmCe8qmbJmnPhpwP7GngCzZYrfbFjLJGo9dFzE6G9YD3gXIHXeCSJYP9UtUcVqquuXNZB8THz0"/>
            <Button className='two' variant="outline-light">Get In Touch </Button>
          </div>
          <div className='about-text'>
            <h1 className="fw-bold  display-3 ">Discover the</h1>
            <h2 className=" fw-bold display-3 ">Best</h2>
            <h1 className="fw-bold  display-3 "> Food and Drinks</h1>
          </div>
          <p className="para display-9 mt-4 ">Naturally made Healthcare Products for the better care & support of your body.</p>
          <button type="button" className="btn btn-danger mt-4">Explore Now !</button>  
        </div>
      </div>
    </div>
  );
}

export default App;
