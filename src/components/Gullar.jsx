// img
import imgbir from '../assets/fotos/uchinchiqismibir.png'
import imgiki from '../assets/fotos/uchinchiqismiiki.png'
// icon
import { FaArrowRight } from "react-icons/fa";
function Gullar() {
  return (
    <div className='container'>
      <div className="row">
        <div className="col-md-6">
           <div className='d-flex align-items-center text-end'>
           <div>
           <img src={imgbir} className='img-fluid' alt="" />
           </div>
           <div>
           <h2>summer caktus <br /> & succulents</h2>
           <p>we are an online plant shop affering a wide range of cheap and tready plants</p>
           <button className='btn btn-success'>find more <FaArrowRight /></button>
           </div>
           </div>
        </div>
        <div className="col-md-6">
        <div className='d-flex align-items-center text-end'>
           <div>
           <img src={imgiki} className='img-fluid' alt="" />
           </div>
           <div>
           <h2>summer caktus <br /> & succulents</h2>
           <p>we are an online plant shop affering a wide range of cheap and tready plants</p>
           <button className='btn btn-success'>find more <FaArrowRight /></button>
           </div>
           </div>
        </div>
      </div>
      
    </div>
  )
}

export default Gullar
