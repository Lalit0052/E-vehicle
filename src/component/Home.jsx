import React from 'react'
import { Link } from 'react-router-dom'
import pic1 from "../assiet/image/1.jpeg"
import pic2 from "../assiet/image/2.avif"
import pic3 from "../assiet/image/3.avif"
import pic4 from "../assiet/image/4.avif"
import pic5 from "../assiet/image/5.avif"
import pic6 from "../assiet/image/bikelogo.png"
import pic7 from "../assiet/image/carlogo.png"
import logo from "../assiet/image/tata-logo.webp"
import logo1 from "../assiet/image/toyota-logo.webp"
import logo2 from "../assiet/image/suzuki-logo.webp"
import logo3 from "../assiet/image/honda-logo.webp"
import logo4 from "../assiet/image/hyundai-logo.webp"
import logo5 from "../assiet/image/citroen-logo.webp"
import logo6 from "../assiet/image/kia-logo.webp"
import logo7 from "../assiet/image/mg-logo.webp"
import logo8 from "../assiet/image/mahindra-logo.webp"
import upc1 from "../assiet/image/mg-5.webp"
import upc2 from "../assiet/image/tatap.webp"
import upc3 from "../assiet/image/toybz4x.webp"
import upb1 from "../assiet/image/luna.webp"
import upb2 from "../assiet/image/600.webp"
import upb3 from "../assiet/image/raptee.webp"
export default function Home() {
  return (
    <>

      <div id="carouselExampleInterval" className="carousel slide " data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="2000">
            <img src={pic1} className="d-block ic w-100" alt="..." />
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src={pic2} className="d-block ic w-100" alt="..." />
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src={pic3} className="d-block ic w-100" alt="..." />
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src={pic4} className="d-block ic w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={pic5} className="d-block ic w-100" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="container-fluid">
        <div className="row">
          <h4 className="bg-dark text-light p-2 text-center"> Click Here For Bike And Car</h4>
          <div className="col-md-6 col-12">
            <Link to="/bike-section" className='btn btn-outline-dark w-75'><img src={pic6} height="190px" className='w-50' alt="" /> For Bike</Link>
          </div>
          <div className="col-md-6 col-12">
            <Link to="/car-section" className='btn btn-outline-dark w-75'><img src={pic7} height="190px" className='w-50' alt="" />For Car</Link>
          </div>
        </div>
        <h4 className="bg-dark text-light p-2 text-center">Top Brand In India </h4>
        <img src={logo} width="70px" className='ms-2' alt="" />
        <img src={logo1} width="70px" className='ms-2' alt="" />
        <img src={logo2} width="70px" className='ms-2' alt="" />
        <img src={logo3} width="70px" className='ms-2' alt="" />
        <img src={logo4} width="70px" className='ms-2' alt="" />
        <img src={logo5} width="70px" className='ms-2' alt="" />
        <img src={logo6} width="70px" className='ms-2' alt="" />
        <img src={logo7} width="70px" className='ms-2' alt="" />
        <img src={logo8} width="70px" className='ms-2' alt="" />
      
      <h4 className="bg-dark text-light p-2 text-center">Upcomig Car In India</h4>
      <div className="upc">
      <div className="card card-block col-12 ms-2">
        <img src={upc1} className="card-img-top1" alt="..." />
        <div className="card-body">
          <p className="card-text"><strong>MG 5 EV</strong></p>
          <p className="card-text">Price-<strong>27 lakh</strong><br /> <small className='fs-7'>Estimated Price in india</small></p>
        </div>
      </div>
      <div className="card card-block col-12 ms-2">
        <img src={upc2} className="card-img-top1" alt="..." />
        <div className="card-body">
          <p className="card-text"><strong>TATA Punch EV</strong></p>
          <p className="card-text">Price-<strong>12 lakh</strong><br /> <small className='fs-7'>Estimated Price in india</small></p>
        </div>
      </div>
      <div className="card card-block col-12 ms-2">
        <img src={upc3} className="card-img-top1" alt="..." />
        <div className="card-body">
          <p className="card-text"><strong>Toyota bZ4X</strong></p>
          <p className="card-text">Price-<strong>70 lakh</strong><br /> <small className='fs-7'>Estimated Price in india</small></p>
        </div>
      </div>
      </div>
      <h4 className="bg-dark text-light p-2 text-center">Upcomig Bike In India</h4>
      <div className="upc">
      <div className="card card-block col-12 ms-2">
        <img src={upb1} className="card-img-top1" alt="..." />
        <div className="card-body">
          <p className="card-text"><strong>Kinetic e-Luna</strong></p>
          <p className="card-text">Price-<strong>80,000</strong><br /> <small className='fs-7'>Estimated Price in india</small></p>
        </div>
      </div>
      <div className="card card-block col-12 ms-2">
        <img src={upb2} className="card-img-top1" alt="..." />
        <div className="card-body">
          <p className="card-text"><strong>Harley davidson edt600r</strong></p>
          <p className="card-text">Price-<strong>2.6 lakh</strong><br /> <small className='fs-7'>Estimated Price in india</small></p>
        </div>
      </div>
      <div className="card card-block col-12 ms-2">
        <img src={upb3} className="card-img-top1" alt="..." />
        <div className="card-body">
          <p className="card-text"><strong>Raptee Electric Bike</strong></p>
          <p className="card-text">Price-<strong>2.9 lakh</strong><br /> <small className='fs-7'>Estimated Price in india</small></p>
        </div>
      </div>
      </div>
      </div>
    </>
  )
}
