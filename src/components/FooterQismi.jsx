import imgbir from '../assets/fotos/Group 18.png'
import imgiki from '../assets/fotos/Group 19.png'
import greenshop from '../assets/fotos/logotip.png'
// icons
import { MdLocationOn } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import { BsTelephoneOutboundFill } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaFingerprint } from "react-icons/fa";
import { TiSocialYoutube } from "react-icons/ti";
// foto
import foto from '../assets/fotos/ohirgirasm.png'
function FooterQismi() {
  return (
    <div className="container">
      <div className="row margin-top align-items-center">
        <div className="col-md-2">
          <div className=" border-end">
            <img src={imgbir} alt="" />
            <h2>Garden Care</h2>
            <p className='text-black-50 '>We are an online plant shop offering a wide range of cheap and trendy plants.</p>
          </div>
        </div>
        <div className="col-md-2 border-end">
          <div className="">
            <img src={imgiki} alt="" />
            <h2>Plant Renovation</h2>
            <p className='text-black-50 '>We are an online plant shop offering a wide range of cheap and trendy plants.</p>
          </div>
        </div>
        <div className="col-md-2">
          <div className=''>
            <img src={imgbir} alt="" />
            <h2>Watering Graden</h2>
            <p className='text-black-50 '>We are an online plant shop offering a wide range of cheap and trendy plants.</p>
          </div>
        </div>
        <div className="col-md-5">
          <h2>Would you like to join newsletters?</h2>
          <div className="input-group mb-3">
            <input type="email" className='form-control px-3 py-2 my-3' placeholder='Eser email' />
            <button className='btn btn-success'>join</button>
            <p className='text-black-50 my-3'>We usually post offers and challenges in newsletter. We’re your online houseplant destination. We offer a wide range of houseplants and accessories shipped directly from our (green)house to yours! </p>
          </div>

        </div>
      </div>
      <div className='bacround container-fluid'>
        <div className="container">
          <div className="row align-items-center my-5 ">
            <div className="col-md-3 my-4">
              <img src={greenshop} alt="" />
            </div>
            <div className="col-md-3">
              <MdLocationOn className='icons text-success' />
              <p className='text-black-50 d-inline '>70 West Buckingham Ave.
                Farmingdale</p>
            </div>
            <div className="col-md-3">
              <HiOutlineMail className='icons text-success' />
              <p className='text-black-50 d-inline '>contact@greenshop.com</p>
            </div>
            <div className="col-md-3">
              <BsTelephoneOutboundFill className='icons text-success' />
              <p className='text-black-50 d-inline '>+88 01911 717 490</p>
            </div>
          </div>
        </div>
      </div>
      <div className='row mt-5'>
        <div className="col-md-3 ">
          <h3>My Account</h3>
          <p className='text-black-50'>My Account</p>
          <p className='text-black-50'>Our stores </p>
          <p className='text-black-50'>Contact us  </p>
          <p className='text-black-50'>Career  </p>
          <p className='text-black-50'>Specials</p>
        </div>
        <div className="col-md-3">
          <h3>Help & Guide</h3>
          <p className='text-black-50'>Help Center  </p>
          <p className='text-black-50'>How to Buy  </p>
          <p className='text-black-50'>Shipping & Delivery  </p>
          <p className='text-black-50'>Shipping & Delivery  </p>
          <p className='text-black-50'>How to Return</p>
        </div>
        <div className='col-md-3'>
          <h3>Categories</h3>
          <p className='text-black-50'>House Plants  </p>
          <p className='text-black-50'>Potter Plants  </p>
          <p className='text-black-50'>Seeds  </p>
          <p className='text-black-50'>Small Plants  </p>
          <p className='text-black-50'>Accessories</p>
        </div>
        <div className='col-md-3'>
          <h3>Social Media</h3>
          <FaFacebookF className='icons text-success mx-2 border border-success p-1 rounded-3 my-3'/>
          <FaInstagram className='icons text-success mx-2 border border-success p-1 rounded-3 my-3'/>
          <AiOutlineTwitter className='icons text-success mx-2 border border-success p-1 rounded-3 my-3'/>
          <FaFingerprint className='icons text-success mx-2 border border-success p-1 rounded-3 my-3'/>
          <TiSocialYoutube className='icons text-success mx-2 border border-success p-1 rounded-3 my-3'/>
          <h3>We accept</h3>
          <img src={foto} className='img-fluid mt-4' alt="" />
        </div>
      </div>
    </div>
  )
}

export default FooterQismi
