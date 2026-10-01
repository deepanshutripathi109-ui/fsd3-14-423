import React from 'react'

const Pen = (props) => {
    const {picUrl, company, price} = props.pen;
  return (
    <div>
        <img src={props.picUrl} alt={company} />
        <h3>{props.company}</h3>
        <h4>Rs.{props.price}</h4>

    </div>
  )
}

export default Pen;