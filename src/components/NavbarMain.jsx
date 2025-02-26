// navbar bootstreap
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
// img
import imgnavbar from '../assets/fotos/logotip.png'
// icon
import { CiSearch } from "react-icons/ci";
import { FaBasketShopping } from "react-icons/fa6";

function NavbarMain() {
  return (
    <div>
      <Navbar expand="lg" className="  my-3 ">
        <Container>
          <img src={imgnavbar} alt="" />
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <NavLink to={"/home"} className="nav-link">Home</NavLink>
              <NavLink to={"/about"} className="nav-link">about</NavLink>
              <NavLink className="nav-link">Plant Care</NavLink>
              <NavLink className="nav-link">Blogs</NavLink>
            </Nav>
            <CiSearch className='text-black mx-4 with' />
            <FaBasketShopping className='text-black mx-4 with' />
            <button className='btn btn-success'>Login</button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavbarMain
