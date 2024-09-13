import React from 'react'

const BannerCard = (props) => {
  return (
   <>
    <div className="bannerCardDiv">
        <h4>{props.heading}</h4>
        <p>{props.text}</p>
    </div>
   </>
  )
}

export default BannerCard
