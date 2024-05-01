import firstslide from '../css/img/slider-1.png';
import secondslide from '../css/img/slider-2.png';
import './Main.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState} from 'react';



  export default function Main() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
  
    const goToPreviousSlide = () => {
      setCurrentSlide((prevSlide) => (prevSlide === 0 ? 1 : prevSlide - 1));
    };
  
    const goToNextSlide = () => {
      setCurrentSlide((prevSlide) => (prevSlide === 1 ? 0 : prevSlide + 1));
    };
  
    return (
      <div 
        id="carouselExampleDark" 
        className={`container-fluid carousel carousel-dark slide ${isHovered ? 'hovered' : ''}`} 
        onMouseEnter={() => setIsHovered(true)} 
        onMouseLeave={() => setIsHovered(false)}
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" id="btn" className=  {currentSlide === 0 ? "active" : ""} aria-current="true" aria-label="Slide 1" onClick={()=> setCurrentSlide(0)}><i class="fa-regular fa-circle"></i></button>
         
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" id="btn" className={currentSlide === 1 ? "active" : ""} aria-label="Slide 2"  onClick={()=> setCurrentSlide(1)}><i class="fa-regular fa-circle"></i></button>
        
        </div>
        <div className="carousel-inner slider">
          <div className={currentSlide === 0 ? "carousel-item active slide" : "carousel-item slide"} data-bs-interval="10000">
            <img src={firstslide} className="d-block w-100" alt="..." />
            {/* display */}
            <div className='slide-display'>
              <div>
                <h1>Don't miss amazing
                  <br />
                  grocery deals </h1>
              </div>
              <div className='silde-display py-3'>
                <h3 className='fw-normal'>Sign up for the daily newsletter</h3>
              </div>
              {/* search */}
              <div className='mt-5'>
                <div className='slide-search d-flex align-items-center justify-content-center'>
                  <span className='slide-search-icon mx-3 fw-light'><i className='fw-light' class="fa-brands fa-telegram"></i></span>
                  <input className='slide-search-input mx-3' type='email' placeholder='Your email address'/>
                  <button className='slide-search-btn' type='submit'>Subscribe</button>
                </div>
              </div>
            </div>
            {/* display */}
          </div>
          <div className={currentSlide === 1 ? "carousel-item active slide" : "carousel-item slide"} data-bs-interval="2000">
            <img src={secondslide} className="d-block w-100" alt="..." />
            <div className='slide-display'>
              <div>
                <h1>Fresh Vegetables  
                  <br />
                  Big discount</h1>
              </div>
              <div className='silde-display py-3'>
                <h3 className='fw-normal'>Save up to 50% off on your first order</h3>
              </div>
              {/* search */}
              <div className='mt-5'>
                <div className='slide-search d-flex align-items-center justify-content-center'>
                  <span className='slide-search-icon mx-3 fw-light'><i className='fw-light' class="fa-brands fa-telegram"></i></span>
                  <input className='slide-search-input mx-3' type='email' placeholder='Your email address'/>
                  <button className='slide-search-btn' type='submit'>Subscribe</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className={`pos prev-pos ${isHovered ? 'visible' : ''}`} type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev" onClick={goToPreviousSlide}>
          <span className="carousel-control-prev-icon icon-decor" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className={`pos next-pos ${isHovered ? 'visible' : ''}`} type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next" onClick={goToNextSlide}>
          <span className="carousel-control-next-icon icon-decor" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    );
  }
