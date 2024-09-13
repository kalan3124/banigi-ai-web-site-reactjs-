import React from 'react'

const HowItWorkCard = (props) => {
  return (
    <>
    <div className="HowItWorkCardDiv">
        <span>{props.number}</span>
        <h4>{props.heading}</h4>
        <p>{props.text}</p>
    </div>
    </>
  )
}

export default HowItWorkCard
