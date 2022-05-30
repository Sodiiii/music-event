import React from 'react';
import './poster.css';


const Poster = () => {

  return (
    <div className='poster_wrapper'>
        <div className='poster'>
            <div className='anons'>
                <h1 className='group_name'>Twenty One Pilots</h1>
                <h2 className='event_data'>22.02.23 B 21:00</h2>
            </div>
            <div className='bottom'>
                <div className='arrow_left'>
                    <div className='arrow_left_top'></div>
                    <div className='arrow_left_bottom'></div>
                </div>
                <button className='buy_btn'>Купить билет</button>
                <div className='arrow_right'>
                    <div className='arrow_right_top'></div>
                    <div className='arrow_right_bottom'></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Poster