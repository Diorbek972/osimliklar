// img
import imgbir from '../assets/fotos/01 1.png'

function Heafer() {
    return (
        <div className="container">
            <div className="row align-items-center">
                <div className="col-md-6">
                    <p className="my-4">Welcome to GreenShop</p>
                    <h1 className="my-4">Let’s Make a
                        Better Planet</h1>
                    We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!
                    <button className="btn btn-success d-block my-4">shop now</button>
                </div>
                <div className="col-md-6">
                    <img src={imgbir} alt="das" />
                </div>
            </div>
        </div>
    )
}

export default Heafer
