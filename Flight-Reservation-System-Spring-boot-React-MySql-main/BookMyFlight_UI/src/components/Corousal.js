import React from 'react';
import homepage from '../assets/images/3.jfif';
import homepage3 from '../assets/images/a1.jfif';
import homepage4 from '../assets/images/R.jfif';
import homepage5 from '../assets/images/r1.jpg';
import homepage6 from '../assets/images/r2.jfif';

function Corousal(props) {
   
    return (
            
            <div id="carouselExampleSlidesOnly" class="carousel slide cross-fade" data-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active " data-bs-interval="1000">
                        <img class="d-block w-100" src={homepage} alt="First slide"/>
                    </div>
                    <div class="carousel-item"data-bs-interval="1000">
                        <img class="d-block w-100" src={homepage3} alt="Second slide"/>
                    </div>
                    <div class="carousel-item"data-bs-interval="1000">
                        <img class="d-block w-100" src={homepage4} alt="Third slide"/>
                    </div>
                    <div class="carousel-item"data-bs-interval="1000">
                        <img class="d-block w-100" src={homepage5} alt="Fourth slide"/>
                    </div>
                    <div class="carousel-item"data-bs-interval="1000">
                        <img class="d-block w-100" src={homepage6} alt="Fifth slide"/>
                    </div>
                    
                    
                    
                </div>
            </div>
            
    );
}

export default Corousal;