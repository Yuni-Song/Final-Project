import Carousel from 'react-bootstrap/Carousel';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Outlet, Link } from "react-router-dom";
import logo from './img/mainpic.jpg'
export function Hero (){

return (<div class="flex" style={{margin: 50}} 
>
    <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={logo}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Spice Explosion</h3>
      <p>Can you handle it?</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
     
      src= {logo}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Spring snacks</h3>
      <p>Fresher than a Spring Chicken.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={logo}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Summer Temptations</h3>
      <p>Surrender to your desires!</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>
);
}