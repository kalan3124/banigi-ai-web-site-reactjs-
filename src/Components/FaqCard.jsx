import React, { useState } from "react";

const FaqCard = ({ title, content }) => {
    const [isActive, setActive]=useState(false)
  return (
    <>
      <div className="accordion">
        <div className="accordion-item">
          <div className="accordion-title" onClick={()=>{
            setActive(!isActive)
          }}>
            <div>{title}</div>
            <div>
                {isActive ?<svg
                width="18"
                height="25"
                viewBox="0 0 18 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                transform="rotate(90)"  
              >
                <path
                  d="M2.25 2.41113L15.75 15.9111L2.25 29.4111"
                  stroke="white"
                  strokeWidth="3.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>:<svg
                width="18"
                height="25"
                viewBox="0 0 18 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                
              >
                <path
                  d="M2.25 2.41113L15.75 15.9111L2.25 29.4111"
                  stroke="white"
                  strokeWidth="3.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>}
              
            </div>
          </div>
          {isActive && <div className="accordion-content " >{content}</div>}
        </div>
      </div>
    </>
  );
};

export default FaqCard;
