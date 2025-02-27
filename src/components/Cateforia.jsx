// img
import imgbir from '../assets/fotos/gullcha.png'
import imgiki from '../assets/fotos/gulbir.png'
import imgici from '../assets/fotos/guliki.png'
import imguch from '../assets/fotos/imguch.png'
import imgtort from '../assets/fotos/imgtort.jpg'
import imgbesh from '../assets/fotos/imgbesh.png'
import imgolti from '../assets/fotos/imgolti.jpg'
import imgyeti from '../assets/fotos/imgyeti.png'
import imgsakiz from '../assets/fotos/imgsakkiz.png'
import imgtoqiz from '../assets/fotos/imgtoqiz.png'
// navbar bootstreap
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import PlantscCategoria from './PlantscCategoria';

function Cateforia() {
  return (
    <div className="container">
      <div className="row margin-top">
        <div className="col-md-3">
            <div>
                <h3 className="mb-4">Categories</h3>
                <div className="ms-3 row ">
                    <div className="col-md-6">
                    <p className="text-success d-inline ">House Plants</p>
                    <p className="my-3">Potter Plants</p> 
                    <p className="">Seeds</p> 
                    <p className="">Small Plants</p> 
                    <p className="">Big Plants</p> 
                    <p className="">Succulents</p> 
                    <p className="">Trerrariums</p> 
                    <p className="">Gardening</p> 
                    <p className="">Accessories</p> 
                   
                    </div>
                    <div className="col-md-6">
                    <p className="text-success d-inline ms-5">(33)</p>
                    <p className="my-3  ms-5">(12)</p>
                    <p className="  ms-5">(65)</p>
                    <p className="  ms-5">(39)</p>
                    <p className="  ms-5">(23)</p>
                    <p className="  ms-5">(17)</p>
                    <p className="  ms-5">(19)</p>
                    <p className="  ms-5">(13)</p>
                    <p className="  ms-5">(18)</p>
                    </div>
                </div>
            </div>
            <div>
                <h3 className="my-4">Price Range</h3>
                <div className="ms-3">
                <p className="d-inline">price</p><p className="d-inline text-success">: $39 - $1230</p>
                <button className="btn btn-success py-2 px-4 d-block mt-4">Filter</button>
                </div>
            </div>
            <div>
                <h3 className="my-4">Categories</h3>
                <div className="ms-3 row ">
                    <div className="col-md-6">
                    <p className="">Small</p> 
                    <p className="">Medium</p> 
                    <p className="">Large</p> 
                   
                    </div>
                    <div className="col-md-6">
                    <p className="  ms-5">(119)</p>
                    <p className="  ms-5">(86)</p>
                    <p className="  ms-5">(78)</p>
                    </div>
                </div>
            </div>
<img src={imgbir} className='img-fluid ' alt="" />
        </div>
        <div className="col-md-9">
        <Navbar expand="lg" className="  my-3 ">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <NavLink className="nav-link mx-3">All Plants</NavLink>
            <NavLink className="nav-link mx-3">New Arrivals</NavLink>
            <NavLink className="nav-link mx-3">Sale</NavLink>

          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="row">
        <div className="col-md-4">
            <PlantscCategoria image={imgiki} decription={"Barberton Daisy"} price={"$119.00"}/>
            <PlantscCategoria image={imgici} decription={"Beach Spider Lily"} price={"$129.00"}/>
            <PlantscCategoria image={imguch} decription={"Bird's Nest Fern"} price={"$99.00"}/>
        </div>
        <div className="col-md-4">
            <PlantscCategoria image={imgtort} decription={"Angel Wing Begonia"} price={"$169.00"}/>
            <PlantscCategoria image={imgbesh} decription={"Blushing Bromeliad"} price={"$139.00"}/>
            <PlantscCategoria image={imgolti} decription={"Broadleaf Lady Palm"} price={"$59.00"}/>
        </div>
        <div className="col-md-4">
            <PlantscCategoria image={imgyeti} decription={"African Violet"} price={"$199.00"} />
            <PlantscCategoria image={imgsakiz} decription={"Aluminum Plant"} price={"$179.00"}/>
            <PlantscCategoria image={imgtoqiz} decription={"Chinese Evergreen"} price={"$39.00"}/>
        </div>
      </div>
        </div>
      </div>
    </div>
  )
}

export default Cateforia
