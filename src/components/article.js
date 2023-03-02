import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';


function ControlledCarousel() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <div className='Carousel'>
            <div className='title'>
                <h1 className='article-title'>Latest Article</h1>
            </div>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <React.Fragment>
                        <div className="container text-center">
                            <div className="row">
                                <div className="col-12 col-md-12 col-lg-4">
                                    <div class="card">
                                        <div>
                                            <img src="https://cdn.loveandlemons.com/wp-content/uploads/2022/07/grilled-tomatoes.jpg" class="card-img-top mt-3 mb-3" alt="..."  />
                                        </div>
                                        <div class="card-body bg-light text-dark">
                                            <h5 class="card-title">Grilled Tomatoes at Home</h5>
                                            <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quia praesentium enim, provident maxime illum? Quo ut aliquam reiciendis a reprehenderit, nostrum corrupti deleniti excepturi saepe illum vero quae sed esse fugiat veritatis sunt consectetr,</p>
                                            <Button className='one' variant="outline-secondary">Read More</Button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-12 col-lg-4">
                                    <div class="card">
                                        <div>
                                            <img src="https://static.toiimg.com/thumb/59215318.cms?imgsize=331377&width=800&height=800" class="card-img-top mt-3 mb-3" alt="..."  />
                                        </div>
                                        <div class="card-body bg-light text-dark" >
                                            <h5 class="card-title ">Snacks for Travel</h5>
                                            <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quia praesentium enim, provident maxime illum? Quo ut aliquam reiciendis a reprehenderit, nostrum corrupti deleniti excepturi saepe illum vero quae sed esse fugiat veritatis sunt consectetr,</p>
                                            <Button className='one' variant="outline-secondary">Read More</Button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-12 col-lg-4">
                                    <div class="card" >
                                        <div>
                                            <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTR6H_QOAxPfGV1uHYKG812rEZcZ76gIY_XcnG6WxV7d3kbHOKB" class="card-img-top mt-3 mb-3" alt="..."  />
                                        </div>
                                        <div class="card-body bg-light text-dark">
                                            <h5 class="card-title">Post-workout Recipes</h5>
                                            <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quia praesentium enim, provident maxime illum? Quo ut aliquam reiciendis a reprehenderit, nostrum corrupti deleniti excepturi saepe illum vero quae sed esse fugiat veritatis sunt consectetr,</p>
                                            <Button className='one' variant="outline-secondary">Read More</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </React.Fragment>
                </Carousel.Item>
                <Carousel.Item>
                    <React.Fragment>
                        <div className="container text-center">
                            <div className="row">
                                <div className="col-12 col-md-12 col-lg-4">
                                    <div class="card">
                                        <div>
                                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTirYafuv2KSus3YvyE_JlxhEjrwgNkb0hBvQ&usqp=CAU" class="card-img-top mt-3 mb-3" alt="..."  />
                                        </div>
                                        <div class="card-body bg-light text-dark">
                                            <h5 class="card-title">How To Grill Corn</h5>
                                            <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quia praesentium enim, provident maxime illum? Quo ut aliquam reiciendis a reprehenderit, nostrum corrupti deleniti excepturi saepe illum vero quae sed esse fugiat veritatis sunt consectetr,</p>
                                            <Button className='one' variant="outline-secondary">Read More</Button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-12 col-lg-4">
                                    <div class="card">
                                        <div>
                                            <img src="https://keytomylime.com/wp-content/uploads/2020/01/Crunchwrap-Stacked-3-480x480.jpg" class="card-img-top mt-3 mb-3" alt="..."  />
                                        </div>
                                        <div class="card-body bg-light text-dark" >
                                            <h5 class="card-title ">Crunchwrap Supreme</h5>
                                            <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quia praesentium enim, provident maxime illum? Quo ut aliquam reiciendis a reprehenderit, nostrum corrupti deleniti excepturi saepe illum vero quae sed esse fugiat veritatis sunt consectetr,</p>
                                            <Button className='one' variant="outline-secondary">Read More</Button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-12 col-lg-4">
                                    <div class="card" >
                                        <div>
                                            <img src="https://pinchofyum.com/wp-content/uploads/Broccoli-Cheese-Soup-2.jpg" class="card-img-top mt-3 mb-3" alt="..."  />
                                        </div>
                                        <div class="card-body bg-light text-dark">
                                            <h5 class="card-title">broccoli cheese soup</h5>
                                            <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quia praesentium enim, provident maxime illum? Quo ut aliquam reiciendis a reprehenderit, nostrum corrupti deleniti excepturi saepe illum vero quae sed esse fugiat veritatis sunt consectetr,</p>
                                            <Button className='one' variant="outline-secondary">Read More</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </React.Fragment>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default ControlledCarousel;