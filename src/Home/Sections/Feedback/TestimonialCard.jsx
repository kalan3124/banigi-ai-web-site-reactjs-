

import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';


let lang = localStorage.getItem("lang");
import { t } from "i18next";

const TestimonialCard1 = (props) => {
    
    return (
        <div className="testimonial-card">
            <div className='testimonial-card-container'>
          <div className="quote-icon">❝</div>
          <p className="testimonial-text">
          {props.text}
          </p>
          <div className="stars">
            {[...Array(5)].map((_, index) => (
              <span key={index}>⭐</span>
            ))}
          </div>
          <div className="profile">
            <img 
              src={props.img} 
              alt="Javeera Ali" 
              className="profile-image" 
            />
            <div className="profile-details">
              <p className="name">{props.name} </p>
              <p className="position">  {props.position} </p>
            </div>
          </div>
          </div>
        </div>
      );
}

export default TestimonialCard1
