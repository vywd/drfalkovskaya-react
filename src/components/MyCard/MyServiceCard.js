import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

export const MyServiceCard = ({servis}) => {

    const [accState, setAccState] = useState(false);
    const [isOpenState, setOpenState] = useState(false)

    const [isOpened, setOpened] = useState(false)

    useEffect(()=>{
      if(isOpenState){
        setOpened(true);
      }
    },[isOpenState])

  return ( 
  <div className='service_card'>
      {/* <div className={'cardblock_image' + (isOpenState ? ' cardblock_image_overlay' : '') } onClick={() => {setOpenState(!isOpenState); document.body.style.overflow = isOpenState ? 'visible' : 'hidden' ;}}> */}
      <div className={(isOpenState ? 'cardblock_image_overlay' : isOpened ? 'cardblock_image' : 'cardblock_base') } onClick={() => {setOpenState(!isOpenState); document.body.style.overflow = isOpenState ? 'visible' : 'hidden' ;}}>
        <img className='card_image' src={servis.image} alt="" />
      </div>
      <div className='card_title' onClick={() => {setAccState(!accState)}}>
          <div className='card_title_title'>{servis.title}</div>
          <div className='card_arrow'>{accState ? '-' : ' +'}</div>
      </div>
      <div className={'card_text' + (accState?' text_visiable':' ') } onClick={() => {setAccState(!accState)}}>{servis.text}</div>
      <br />
  </div>
  );
};
