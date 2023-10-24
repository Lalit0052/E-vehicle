import React from 'react'
import pic1 from "../assiet/image/insta.png"
import pic2 from "../assiet/image/twitter.jpg"
import pic3 from "../assiet/image/face.png"

export default function Footer() {
  return (
    <>
      <div className="container-fluid mt-2 bg-dark">
        <h3 className='text-light text-center p-2'>CopyRight@E-Vehicle2023</h3>
        <h4 className='text-light text-center p-2'>Gmail-e-vehicleinfo@gmail.com</h4>
        <div className="row">
          <div className="col-md-4 col-12">
          </div>
          <div className="col-md-4 col-12 ms-4">
            <button className='ms-3 text-center me-3 btn' ><img src={pic1} width="45px" alt="" /></button>
            <button className='ms-3 text-center me-3 btn' ><img src={pic2} width="45px" alt="" /></button>
            <button className='ms-3 text-center btn' ><img src={pic3} width="45px" alt="" /></button>
          </div>
          <div className="col-md-4 col-12">
          </div>
        </div>
      </div>
    </>
  )
}
