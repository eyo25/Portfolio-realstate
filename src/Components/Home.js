import React from 'react'
import {Carousel} from 'react-bootstrap'
import House from '../Image and logo/A_Photo - 11.jpg'
import Extrior from '../Image and logo/Screenshot (10).png'
import HouseOne from '../Image and logo/A_Photo - 18.jpg'
import {Link} from 'react-router-dom'

const Home = () => {
    return (
<Carousel className="justfy" fade>
  <Carousel.Item>
    <img
      className=" d-block w-100"
      src={House}
      alt="First slide"
    />
    <Carousel.Caption className='info-syle'>
    <h1>Bezack Interior Designs</h1>
      <h3>Residential Apartments</h3>
      <Link to='/projects' className='btn btn-outline-primary'>View Project</Link>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Extrior}
      alt="Second slide"
    />

    <Carousel.Caption className='info-syle' >
    <h1>Bezack Interior Designs</h1>
      <h3>Residential Apartments</h3>
      <Link to='/projects' className='btn btn-outline-primary'>View Project</Link>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={HouseOne}
      alt="Third slide"
    />

    <Carousel.Caption  className='info-syle'>
    <h1>Bezack Interior Designs</h1>
      <h3>Residential Apartments</h3>
      <Link to='/projects' className='btn btn-outline-primary'>View Project</Link>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
            
    )
}

export default Home
