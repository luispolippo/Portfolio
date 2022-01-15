import React, { useState } from 'react'
import { sliderImages } from '../data/sliderImages';
import { FaArrowLeft, FaArrowRight} from 'react-icons/fa';
import SliderCSS from '../styles/Slider.module.css';

function Slider() {
  const [currentImage, setCurrentImage] = useState(0);
  const length = sliderImages.length;

  const nextSlide = () => {
    setCurrentImage(currentImage >= length - 1 ? 0 : currentImage + 1);
  }

  const previousSlide = () => {
    setCurrentImage(currentImage <= 0 ? length - 1 : currentImage - 1);
  }

  return (
    <>
      <section className={SliderCSS.slider_section}>
        {
          sliderImages.map(({image, title, url}, index) => (
              <div className={index === currentImage ? `${SliderCSS.slide} ${SliderCSS.active}` : SliderCSS.slide}>
                {
                  index === currentImage && (
                  <>  
                    <a href={url} target='_blank' rel="noreferrer">
                      <h3 >{title}</h3>
                      <div key={index} >
                        <img src={image} alt={title} className={SliderCSS.sliderImage}/>
                      </div>  
                    </a>
                  </>
                  )
                }
              </div> 
            )
          )
        }
      </section>
      <div className={SliderCSS.arrow_container}>
        <FaArrowLeft onClick={previousSlide} className={SliderCSS.arrowIcons}/>
        <FaArrowRight onClick={nextSlide} className={SliderCSS.arrowIcons}/>
      </div>
      <div className={SliderCSS.sliderMarker_container}>
          {
            sliderImages.map((_image, index) => {
              return(
                <div key={index} className={index === currentImage ? `${SliderCSS.sliderMarker} ${SliderCSS.active}` : SliderCSS.sliderMarker}>
                </div>
              )
            })
          }
        </div>
    </>  
  )
}

export default Slider;
