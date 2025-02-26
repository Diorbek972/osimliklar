
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// img
import imgbir from '../assets/fotos/01 1.png'


function Carusel() {
    return (
        <div>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={false}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <p className="my-4">Welcome to GreenShop</p>
                            <h1 className="my-4">Let’s Make a
                                Better Planet</h1>
                            We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!
                            <button className="btn btn-success d-block my-4">shop now</button>
                        </div>
                        <div className="col-md-6">
                            <img src={imgbir} className='w-75' alt="das" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <p className="my-4">Welcome to GreenShop</p>
                            <h1 className="my-4">Let’s Make a
                                Better Planet</h1>
                            We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!
                            <button className="btn btn-success d-block my-4">shop now</button>
                        </div>
                        <div className="col-md-6">
                            <img src={imgbir} className='w-75' alt="das" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <p className="my-4">Welcome to GreenShop</p>
                            <h1 className="my-4">Let’s Make a
                                Better Planet</h1>
                            We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!
                            <button className="btn btn-success d-block my-4">shop now</button>
                        </div>
                        <div className="col-md-6">
                            <img src={imgbir} className='w-75' alt="das" />
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    )
}

export default Carusel
