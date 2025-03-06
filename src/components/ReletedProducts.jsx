
import imgiki from '../assets/fotos/gulbir.png'
import imgici from '../assets/fotos/guliki.png'
import imguch from '../assets/fotos/imguch.png'
import imgtort from '../assets/fotos/imgtort.jpg'
import imgbesh from '../assets/fotos/imgbesh.png'

import PlantscCategoria from './PlantscCategoria';
import { Container } from 'react-bootstrap'

function ReletedProducts() {
    return (
        <Container>
            <h3 className='text-success margin-top'>Releted Products</h3><hr />
            <div className="row margin-top">
                <div className="col-md-2 img-fluid me-4">
                    <PlantscCategoria image={imgiki} decription={"Barberton Daisy"} price={"$119.00"} />
                </div>
                <div className="col-md-2 img-fluid me-4">
                    <PlantscCategoria image={imgici} decription={"Beach Spider Lily"} price={"$129.00"} />
                </div>
                <div className="col-md-2 img-fluid me-4">
                    <PlantscCategoria image={imguch} decription={"Bird's Nest Fern"} price={"$99.00"} />
                </div>
                <div className="col-md-2 img-fluid me-4">
                    <PlantscCategoria image={imgtort} decription={"Angel Wing Begonia"} price={"$169.00"} />
                </div>
                <div className="col-md-2 img-fluid me-4">
                    <PlantscCategoria image={imgbesh} decription={"Blushing Bromeliad"} price={"$139.00"} />
                </div>
            </div>
        </Container>
    )
}

export default ReletedProducts
