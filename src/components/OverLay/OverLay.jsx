import React from 'react'
import '../OverLay/OverLay.css';
import { WORLDHEXAGONMAP } from '../WORLDHEXAGONMAP';
// import { BubbleChart } from '../BubbleChart'
// import { WORLDHEXAGONMAP } from '../WORLDHEXAGONMAP'

function OverLay(props) {
  return (
    <div className='overlay'>
        {props.children}
        <div className="overlay-mid">
            <WORLDHEXAGONMAP />
        </div>
    </div>
  )
}

export default OverLay