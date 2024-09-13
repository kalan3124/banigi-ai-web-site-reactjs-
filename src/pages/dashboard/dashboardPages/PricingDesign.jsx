import React from 'react'
import PricingCard from '../../../Components/PricingCard'

const PricingDesign = () => {
  const personal_features = [
    'Free 3 credits',
    'Free 10 credits',
    'Interior Design',
    'Exterior Design',
    'Landscape Design',
    'Custom Design',
    '24/7 Support',
    'All features Access',
    'No expiry time',
  ];
  const startup_features = [
    'Free 3 credits',
    'Free 100 credits',
    'Interior Design',
    'Exterior Design',
    'Landscape Design',
    'Custom Design',
    '24/7 Support',
    'All features Access',
    'No expiry time',
  ];
  const growth_features = [
    'Free 3 credits',
    'Free 500 credits',
    'Interior Design',
    'Exterior Design',
    'Landscape Design',
    'Custom Design',
    '24/7 Support',
    'All features Access',
    'No expiry time',
  ];
  return (
    <>

      <div className="dash_pricing_section">
        <div className="dash_pricing_header">
          <h3>Pricing</h3>
          <p>You can stay on the personal $8 plan until you have need enough design generation to justify your self. After you can upgrade the package.</p>
        </div>
        <div className="dash_pricing_bottom">
          <PricingCard heading="Personal" price="$2.5" features={personal_features} classBtn="secondary_btn"/>
          <PricingCard heading="Start Up" price="$12.9" features={startup_features} />
          <PricingCard heading="Growth" price="$40.5" features={growth_features}classBtn="secondary_btn" />
        </div>

      </div>

    </>
  )
}

export default PricingDesign
