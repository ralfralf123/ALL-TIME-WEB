import React, { useState } from 'react';
import axios from 'axios';


const contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [inquiry, setInquiry] = useState('');
  
  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Form submitted');
    window.location.reload();
  };
  

  return (
    <div className='page4'>
      <div className='page-margin'>
        <div className='row5'>
          <h1>Contact Us</h1>
        </div>
        <div className='row6'>
          <div className='col1'>
            <div className='row7'>
              <div className='row7-content1'>
                <img src='elements/mail.png' />
                <p>info@alltimetechsol.com</p>
              </div>
              <div className='row7-content2'>
                <img src='elements/ping.png' />
                <p>Unit 2C Juliana Bldg. 331 Aguirre Ave. Bf Homes 1720 Parañaque, Philippine</p>
              </div>
            </div>
            <div className='row8'>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" className='input' placeholder='Name' value={name} onChange={(event) => setName(event.target.value)} /> <br />
                <input type="email" name="email" className='input' placeholder='Email' value={email} onChange={(event) => setEmail(event.target.value)} /> <br />
                <textarea type="inquiry" className='input textarea'name="inquiry" placeholder='Inquiry'  value={inquiry} onChange={(event) => setInquiry(event.target.value)} /> <br />
              <center><button type="submit">Submit</button></center>
            </form>
            </div>
          </div>
          <div className="col2">
            <img src="elements/contact-element.png" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default contact