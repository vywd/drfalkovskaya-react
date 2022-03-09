import React from 'react';
import { useState, useEffect} from 'react';

//////////// IMAGE ELEMENT
  const CarouselImages = ({imgsrc, itemarg, onOver, isOver}) => {
    return <img src={imgsrc} alt="" className={`mycarousel_image image_${itemarg}`} onClick={()=>{onOver(!isOver); document.body.style.overflow = isOver ? 'visible' : 'hidden' ;}} />
  }
//////////// BUTTON ELEMENT
  const CarouselIndicators = ({itemarg, arr, indicatorSelect}) => {
    return (
    <div style={{
      width: 'calc((100%/' + arr.length + ')/2)',
    }}
    className={`mycarousel_indicator indicator_${itemarg}`} onClick={() => {indicatorSelect(itemarg)}}>
    </div>
    )
  }

/////////////////// CAROUSEL
export const MyCarousel = ({arr, interval, startelement}) => {

  const [activeImage, setActiveImage] = useState( (startelement ? startelement : 0) );

  const [isOverlay, setOverlay] = useState(false);

  const [isUsed, setUsed] = useState(false);

////////////switcher timer
  useEffect(()=> {
  let images = document.querySelectorAll('.mycarousel_image')
  let indicators = document.querySelectorAll('.mycarousel_indicator')

    indicators[activeImage].classList.add('indicator_active');
    images[activeImage].classList.add('mycarousel_image_active');

    let inter = setInterval(()=>{
      activeImage < arr.length-1 ? setActiveImage(activeImage + 1) : setActiveImage(0);
    },interval)

    return () => 
    {
      indicators[activeImage].classList.remove('indicator_active');
      images[activeImage].classList.remove('mycarousel_image_active');
      clearInterval(inter);
    }
  })
///////////next photo
  function nextImage() {
    (activeImage + 1) > arr.length-1 ? setActiveImage(0) : setActiveImage(activeImage+1);
  }
//////////prev photo
  function prevImage() {
    (activeImage - 1) < 0 ? setActiveImage(arr.length-1) : setActiveImage(activeImage-1);
  }
////////indicator switch element
  function setImage(index) {
    setActiveImage(index);
  }
//////////////////ADDANIMATION
useEffect(()=>{
  if(isOverlay){
    setUsed(true);
  }
},[isOverlay])

//////// RETURNED ELEMENT  
return (
  <>
    {/* <div className={isOverlay?'carouseloverlay':'carouseloverlayHidden'} onClick={()=>{setOverlay(!isOverlay); document.body.style.overflow='visible'}}></div> */}
          {/* <div className={'mycarousel' + ( isOverlay ? ' mycarousel_overlay': '')}> 
          onClick={()=>{if(!isOverlay) {setOverlay(!isOverlay); document.body.style.overflow='hidden';}}}
          */}
          <div className={'mycarousel' + (  isOverlay ? ' mycarousel_overlay': isUsed ? ' mycarousel_inline' : '')} >
              
              {arr.map((arrimg, index) => {
                return <CarouselImages imgsrc={arrimg.image} itemarg={index} key={index} onOver={setOverlay} isOver={isOverlay} />
              })}

                <div className='mycarousel_button button_left' onClick={prevImage}></div>

                <div className='mycarousel_button button_right' onClick={nextImage}></div>

                <div className='mycarousel_indicators' style={{
                  width: `calc(${arr.length} * 40px)`
                }}>
                  {arr.map((arrimg, index, arr) => {
                    return <CarouselIndicators key={index} itemarg={index} arr={arr} indicatorSelect={setImage} />
                  })}
              </div>
          </div>
    </>
  );
};
