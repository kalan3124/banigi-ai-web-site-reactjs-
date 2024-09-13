import React from 'react'

const FeatureCard = ({icon,title,para}) => {
    return (
        <>
            <div className='feature_box'>
               {icon}
                <h4>{title}</h4>
                <p>{para}</p>
            </div>
        </>
    )
}

export default FeatureCard
