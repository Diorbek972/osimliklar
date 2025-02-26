import imgbir from '../assets/fotos/Group 18.png'
import imgiki from '../assets/fotos/Group 19.png'
function FooterQismi() {
  return (
    <div className="container">
      <div className="row my-5 align-items-center">
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
    </div>
  )
}

export default FooterQismi
