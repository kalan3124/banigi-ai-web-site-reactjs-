import React from 'react'

const PrimaryButton = ({text ,classBtn,onClick}) => {
  return (
   <>
   <button onClick={onClick} className={`primary_btn ${classBtn}`}>{text}</button>
   </>
  )
}

export default PrimaryButton
