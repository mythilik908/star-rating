import './App.css';
import 'typeface-merriweather';
import 'typeface-poppins';
import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

function App() {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  const descriptions = {
    5 : "Excellent! We're thrilled to hear you had such a positive experience. Thank you for choosing our product/service.",
    4 : "Thank you for your positive feedback! We're glad to know that you had a great experience and we appreciate your support.",
    3 : "Thank you for your feedback. We're sorry to hear that your experience wasn't perfect. We would love to hear more about your concerns to see how we can improve.",
    2 : "We apologize for the inconvenience you experienced. We appreciate your feedback and would like to work with you to address any issues.",
    1 : "We're sorry to hear that you had a bad experience. We would like to learn more about what happened and how we can make things right."
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="box">
          <div className="item">
            <p>How many stars would you give to our Online Code Editor?</p>
            </div>
            <div className='item1'>
              {Array.from({ length: 5 }, (star, ind) => {
                const ratingValue = ind + 1;
                return (
                  <label key={ind}>
                    <input
                      type="radio"
                      value={ratingValue}
                      name="rating"
                      onClick={() => setRating(ratingValue)}
                      style={{ display: 'none' }}
                    />
                    <FaStar
                      className="star"
                      onMouseEnter={() => setHover(ratingValue)}
                      onMouseLeave={() => setHover(null)}
                      color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                      size={50}
                    />
                  </label>
                );
              })}
              <p>{descriptions[rating]}</p>
            </div>
        </div>
      </header>
    </div>
  );
}

export default App;
