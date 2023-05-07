import React from 'react'

function Card(props) {
  return (
    <div>
  <div className='cards'>
    <div className='card'>
      <img src={props.imgsrc} alt="" className='img'></img>
      <div className='card_info'>
      <span className='card_title'>{props.title}</span>
      <h3 className='card_title'></h3>
      <a href="" target="_blank">
        <button>Watch Now</button>
      </a>
      </div>
    </div>
  </div>
 </div>
  )
}

export default Card