import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from '../imgs/logo.jpg';
import CartWidget from './CartWidget';
import Carousel from 'react-bootstrap/Carousel';
import cover from '../imgs/cover.jpg';
import sony from '../imgs/sonyCover.png';
import microsoft from '../imgs/xboxCover.webp';
import nintendo from '../imgs/nintendoCover.jpg';
import { NavLink, Link } from "react-router-dom";


export function NavBar() {
  return (
    <>
    <header className='header'>
    <Navbar className="navi" bg="light" expand="lg">
      <Container>
      <Link to={'/'}><img className="logo" src={Logo} alt=""/></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <div className='navegacion'>
                <NavLink className={({isActive})=>isActive ? "claseActive": "claseInactive"}
                 to="/">Inicio</NavLink>
                <NavLink className={({isActive})=>isActive ? "claseActive": "claseInactive"}
                 to="/products/ps5">PS5</NavLink>
                <NavLink className={({isActive})=>isActive ? "claseActive": "claseInactive"}
                 to="/products/xbox">XBOX</NavLink>
                <NavLink className={({isActive})=>isActive ? "claseActive": "claseInactive"}
                 to="/products/nintendo">Nintendo</NavLink>
            </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <div>
      <CartWidget/>
    </div>
    </header>


    <Carousel className='carousel'>
      <Carousel.Item>
        <img
          className="d-block w-100 carrousel-img"
          src={cover}
          alt="First slide"
        />
        <Carousel.Caption className='carrousel-text'>
          <h3><strong>Bienvenido a Level up Store</strong></h3>
          <p>Precio y calidad, sugerida por nuestros clientes</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 carrousel-img"
          src={sony}
          alt="Second slide"
        />
        <Carousel.Caption className='carrousel-text'>
          <h3><strong>Sony - PS5</strong></h3>
          <p>La mejor consola del mundo</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 carrousel-img"
          src={microsoft}
          alt="Third slide"
        />
        <Carousel.Caption className='carrousel-text'>
          <h3><strong>Microsoft - XBOX</strong></h3>
          <p> un heroe con Halo!</p>
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item>
        <img
          className="d-block w-100 carrousel-img"
          src={nintendo}
          alt="First slide"
        />
        <Carousel.Caption className='carrousel-text'>
          <h3><strong>Nintendo</strong></h3>
          <p>Acompaña a Mario en sus aventuras</p>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
    </>
  );
}

