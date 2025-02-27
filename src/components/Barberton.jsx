// img
import imgbir from '../assets/fotos/chiroylibir.jpg'
import imgiki from '../assets/fotos/chiroyliiki.png'

// icon
import { FaStar } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { GrArchlinux } from "react-icons/gr";
import { MdOutlineEmail } from "react-icons/md";
function Barberton() {
    return (
        <div className='container'>
            <div className="row margin-top">
                <div className="col-md-1">
                    <img src={imgbir} className='img-fluid' alt="" />
                    <img src={imgiki} className='img-fluid' alt="" />
                    <img src={imgbir} className='img-fluid' alt="" />
                    <img src={imgiki} className='img-fluid' alt="" />
                </div>
                <div className='col-md-5'>
                    <img src={imgiki} className='img-fluid' alt="" />
                </div>
                <div className="col-md-6">
                    <h2 className='mb-3'>Barberton Daisy</h2>

                    <div>
                        <h3 className='text-success d-inline me-5'>$119.00</h3>
                        <FaStar className='text-warning me-2' />
                        <FaStar className='text-warning me-2' />
                        <FaStar className='text-warning me-2' />
                        <FaStar className='text-warning me-2' />
                        <FaStar className='text-black-50 me-3' />
                        <p className='text-black-50 d-inline'>19 Customer Review</p>
                    </div>
                    <hr />
                    <h4 className='my-4'>Short Description:</h4>
                    <p className='text-black-50'>The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. The ceramic cylinder planters come with a wooden stand to help elevate your plants off the ground. </p>
                    <h4 className='my-4'>Size:</h4>
                    <h3 className='my-5 border border-success rounded-circle d-inline px-3 py-1 me-3'>s</h3>
                    <h3 className='my-5 border rounded-circle d-inline px-3 py-2 me-3'>m</h3>
                    <h3 className='my-5 border rounded-circle d-inline px-4 py-2 me-3'>l</h3>
                    <h3 className='my-5 border rounded-circle d-inline px-3 py-2 me-3'>xl</h3>
                    <div className='mt-5'>
                        <h3 className='border border-success rounded-circle px-3 py-2 bg-success text-white d-inline mt-5'>-</h3>
                        <h3 className='mx-3 d-inline'>1</h3>
                        <h3 className='border border-success rounded-circle px-3 py-2 bg-success text-white d-inline my-5'>+</h3>
                        <button className='btn btn-success me-3 ms-5'>BUY NOW</button>
                        <button className='btn btn-outline-success me-3 '>Add to cart</button>
                        <button className='btn btn-outline-success'><FcLike /></button>
                    </div>
                    <div>
                        <p>SKU: 1995751877966</p>
                        <p>Categories: Potter Plants</p>
                        <p>Tags: Home, Garden, Plants</p>
                        <p className='d-inline'>Share this products:</p>
                        <FaFacebookF className='mx-3'/>
                        <FaTwitter className='mx-3'/>
                        <GrArchlinux className='mx-3'/>
                        <MdOutlineEmail className='mx-3'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Barberton
