import React from 'react'

const services = () => {
  return (
    <>
    <div className='page2'>
        <div className='page-margin'>
            <div className='row row1'>
                <h1>Services</h1>
            </div>
            <div className='row row2'>
                <div className='box-item'>
                    <img src="elements/service-element1.png" alt="box-logo"/>
                    <p>Web Design <br />and <br /> Development</p>
                </div>
                <div className='box-item'>
                    <img src="elements/Asset 9.png" alt="box-logo"/>
                    <p>App Design <br />and <br /> Development</p>
                </div>
                <div className='box-item'>
                    <img src="elements/service-element2.png" style={{width:'25%'}} alt="box-logo"/>
                    <p>Social Media<br /> Marketing</p>
                </div>
                <div className='box-item'>
                    <img src="elements/Asset 6.png" alt="box-logo"/>
                    <p>Lorem Ipsum</p>
                </div>
            </div>
            <div className='row row3'>
                <div className="row3-content">
                <h2>Social Media Marketing</h2>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, </p> 
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit,  </p>
                    <button>Get Quote</button>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default services;
