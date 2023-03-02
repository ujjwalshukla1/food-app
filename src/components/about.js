import React from "react";
import './comp.css';

function FigureExample() {
    return (
        <div className="about1">
            <div className="about-sec col-12 col-sm-6 mt-md-3">
                <div className="row">
                    <div>
                        <img className="img-fluid2" src="https://www.theteaspoonclub.co.uk/clear_cta/1574518909Slate%20spoons%20773%20x%20624.png" />

                        <div className=" about-text3 w-50">
                            <h1 className="about-text2">About Us</h1>
                            <p className="about-text1"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. t has survived not only five centuries. </p>
                            <div className="btn1">
                            <button type="button" className="btn btn-danger mt-4">Read More</button>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default FigureExample;