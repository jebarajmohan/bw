import React, { useEffect, useState, useRef } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Form.css';

function Form() {
  const [error, setError] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);
  const dateInputRef = useRef(null);
  const [captcha, setCaptcha] = useState('');
  const [captchaInput, setCaptchaInput] = useState('');
    const captchaRef = useRef(null);

  // Generate a random 4-character string for the captcha
    const generateCaptcha = () => {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = [];

        for (let i = 0; i < 4; i++) {
           const char = chars.charAt(Math.floor(Math.random() * chars.length));
            const color = ['red', 'green', 'blue', 'orange'][Math.floor(Math.random()*4)];
            const fontSize = Math.random() > 0.5 ? '18px' : '16px';
            result.push(<span key={i} style={{color: color, fontSize: fontSize}}>{char}</span>)
         }
         setCaptcha(result);
         console.log('Generated captcha:', result.map(span => span.props.children).join(''));
    };

  useEffect(() => {
    // Generate a captcha when the component mounts
    generateCaptcha();
  }, []);

  useEffect(() => {
    const getUrlParams = () => {
      const urlParams = new URLSearchParams(window.location.search);
      const utmParams = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];

      utmParams.forEach((param) => {
        const value = urlParams.get(param);
        if (value) {
          document.querySelector(`input[name="${param}"]`).value = value;
        }
      });
    };
    getUrlParams();
  }, []);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    if (date) {
      const day = String(date.getDate()).padStart(2, '0');
      const month = date.toLocaleString('default', { month: 'short' });
      const year = date.getFullYear();
      const formattedDate = `${day}-${month}-${year}`;
      dateInputRef.current.value = formattedDate;
    }
  };

  const handleCaptchaChange = (e) => {
      console.log('Input captcha:', e.target.value);
    setCaptchaInput(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const date = dateInputRef.current.value;
    const hours = document.querySelector('select[name="DateTime_hours"]').value;
    const minutes = document.querySelector('select[name="DateTime_minutes"]').value;
    const meridiem = document.querySelector('select[name="DateTime_meridiem"]').value;

       const captchaText = captcha.map(span => span.props.children).join('');
        console.log('Captcha to compare:', captchaText);
         console.log('Input to compare:', captchaInput)

      if(captchaInput !== captchaText){
           setError('Captcha is invalid!');
           generateCaptcha();
           return;
      }

    if (!date || !hours || !minutes || !meridiem) {
      setError('Please fill out all the Delivery Date-Time fields.');
      return;
    }

    e.target.submit();
  };
    
    const handleRefresh = () => {
      generateCaptcha();
    }

  return (
    <section className="form-section">
      <div className="hero-background"></div>
      <div className="form-image">
      <img src="https://i.postimg.cc/xCcJYHd9/Truck.png" alt="Delivery Truck" />
      </div>
      <div className="container form-container">
        <div className="form-card">
          <div className="form-header">
            <h2>Fill In Your Details</h2>
          </div>
          <div className="form-details">
            <form
              action='https://forms.zohopublic.in/biriyaniworld/form/Biriyaniorderform/formperma/CaOh2TRdzMcSAyeTOjcEiRIya-jA11kuBL2GvB71-AA/htmlRecords/submit'
              method='POST'
              acceptCharset='UTF-8'
              encType='multipart/form-data'
              onSubmit={handleFormSubmit}
            >
              <input type="hidden" name="utm_source" />
              <input type="hidden" name="utm_medium" />
              <input type="hidden" name="utm_campaign" />
              <input type="hidden" name="utm_term" />
              <input type="hidden" name="utm_content" />

              <div className="form-row name-phone-container">
                <div className="form-group name-group">
                  <label>Full Name *</label>
                  <input type="text" name="SingleLine" placeholder="Full Name *" required />
                </div>
                <div className="form-group phone-group">
                  <label>Phone No*</label>
                  <input type="text" name="PhoneNumber_countrycode" placeholder="Phone No*" required />
                </div>
              </div>
                
              <div className="form-row branch-time-container">
                <div className="form-group branch-group">
                  <label>Delivery Date</label>
                  <DatePicker
                    selected={selectedDate}
                    onChange={handleDateChange}
                    dateFormat="dd-MMM-yyyy"
                    placeholderText="Select Date"
                    className="date-picker"
                    required
                  />
                  <input type="hidden" name="DateTime_date" ref={dateInputRef} />
                </div>
                  <div className="form-group time-group">
                      <label>Select Delivery Time</label>
                      <div className="time-select-container">
                        <select name="DateTime_hours" required>
                          <option value="">HH</option>
                          {Array.from({ length: 12 }, (_, i) => (
                            <option key={i} value={String(i + 1).padStart(2, '0')}>
                              {String(i + 1).padStart(2, '0')}
                            </option>
                          ))}
                        </select>
                        <span>:</span>
                        <select name="DateTime_minutes" required>
                          <option value="00">00</option>
                          <option value="30">30</option>
                        </select>
                       <select name="DateTime_meridiem" required>
                            <option value="">AM / PM</option>
                             <option value="AM">AM</option>
                            <option value="PM">PM</option>
                        </select>
                      </div>
                    </div>
                </div>
                
                <div className="form-row">
                  <div className="form-group full-width">
                    <label>Address *</label>
                    <textarea name="MultiLine" placeholder="Address *" required />
                  </div>
                </div>
              
                 <div className="form-row address-landmark-container">
                  <div className="form-group address-group">
                     <label>Pincode *</label>
                    <input type="text" name="Pincode" placeholder="Pincode *" required />
                   </div>
                      <div className="form-group landmark-group">
                        <label>Landmark (Optional)</label>
                        <input type="text" name="Landmark" placeholder="Nearby place (Optional)" />
                      </div>
                </div>
              
                 <div className="form-row">
                   <div className="form-group captcha-container">
                     <label>Enter Captcha</label>
                     <div style={{ display: 'flex', alignItems: 'center' , gap: '10px'}}>
                       <input type="text" name="captcha" placeholder="Enter captcha" onChange={handleCaptchaChange} required />
                        <div className="captcha-image" ref={captchaRef}>{captcha}
                          <button type="button" onClick={handleRefresh}> Refresh</button>
                        </div>
                       </div>
                   </div>
                </div>

              {error && <p className="error-message">{error}</p>}
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Form;