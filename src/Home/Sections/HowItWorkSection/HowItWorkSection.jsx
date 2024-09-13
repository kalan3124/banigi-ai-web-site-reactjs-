import React from 'react'


import HowItWorkImg from "../../../assets/HowItWorkImg.png"
import HowItWorkCard from '../../../Components/HowItWorkCard'

const HowItWorkSection = () => {
    return (
        <>

            <div className="HowItWorkDiv" id='howItWork'>
                <h2>How it <span>work</span></h2>
                <div className="HowItWorkContainer">
                    <div className="HowItWork_left">
                        <HowItWorkCard number="1" heading="Choose category" text="Choose interior, exterior, landscape or custom design" />
                        <div className="card_line"><hr /></div>
                        <HowItWorkCard number="2" heading="Upload Image" text="Take a clear photo and upload it" />
                    </div>
                    <div className="HowItWork_Middle">
                        <img src={HowItWorkImg} alt="" />
                    </div>
                    <div className="HowItWork_right">
                        <HowItWorkCard number="3" heading="Select Styles" text="Apply the different style like color, mode, type" />
                        <div className="card_line"><hr /></div>
                        <HowItWorkCard number="4" heading="Generate Image" text="Click on generate button to make design" />
                    </div>
                </div>

            </div>

        </>
    )
}

export default HowItWorkSection
