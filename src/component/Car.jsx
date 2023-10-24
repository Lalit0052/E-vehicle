import React from 'react'
import rc1 from "../assiet/image/bike/rc1.webp"
import rc2 from "../assiet/image/bike/rc2.webp"
import rc3 from "../assiet/image/bike/rc3.webp"
import rc4 from "../assiet/image/bike/rc4.webp"
import rc5 from "../assiet/image/bike/rc5.webp"
import rc6 from "../assiet/image/bike/rc6.webp"
import rc7 from "../assiet/image/bike/rc7.webp"

export default function Car() {
  return (
    <>
    <div className="conatiner-fluid bg-dark">
   <div className="card card-block mt-1 col-12">
   <img src={rc1} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Tata Nexon EV</h5>
    <p className="card-text fs-6"><strong>Price <small>In India</small> - &#8377;14.74-19.94 lakh</strong></p>
    <p className="card-text fs-8">Tata Nexon EV price for the base model starts at Rs. 14.74 Lakh and the top model price goes upto Rs. 19.94 Lakh Avg. ex-showroom. Nexon EV price for 9 variants is listed below.</p>
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">Driving Range - 4200 Km</li>
    <li className="list-group-item">Seating Capacity - 5 Seater</li>
    <li className="list-group-item">Battery Capacity - 30 kWh</li>
  </ul>
</div>
<div className="card card-block mt-1 col-12">
   <img src={rc2} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">MG Comet EV</h5>
    <p className="card-text fs-6"><strong>Price <small>In India</small> - &#8377;7.98-10.63 lakh</strong></p>
    <p className="card-text fs-8">MG Comet EV price for the base model starts at Rs. 7.98 Lakh and the top model price goes upto Rs. 10.63 Lakh Avg. ex-showroom. Comet EV price for 6 variants is listed below.</p>
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">Driving Range - 250 Km</li>
    <li className="list-group-item">Seating Capacity - 5 Seater</li>
    <li className="list-group-item">Battery Capacity - 17.3kWh</li>
  </ul>
</div>
<div className="card card-block mt-1 col-12">
   <img src={rc3} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Mahindra XUV400</h5>
    <p className="card-text fs-6"><strong>Price <small>In India</small> - &#8377;15.99-19.19 lakh</strong></p>
    <p className="card-text fs-8">Mahindra XUV400 price for the base model starts at Rs. 15.99 Lakh and the top model price goes upto Rs. 19.19 Lakh (Avg. ex-showroom). XUV400 price for 4 variants is listed below.</p>
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">Driving Range - 375-456 Km</li>
    <li className="list-group-item">Seating Capacity - 5 Seater</li>
    <li className="list-group-item">Battery Capacity - 34.5-39.4 kWh</li>
  </ul>
</div>
<div className="card card-block mt-1 col-12">
   <img src={rc4} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Hyundai Ioniq 5</h5>
    <p className="card-text fs-6"><strong>Price <small>In India</small> - &#8377;45.95 lakh</strong></p>
    <p className="card-text fs-8">Hyundai Ioniq 5 price for the base model is Rs. 45.95 Lakh (Avg. ex-showroom). Ioniq 5 price for 1 variant is listed below.</p>
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">Driving Range - 500 Km</li>
    <li className="list-group-item">Seating Capacity - 5 Seater</li>
    <li className="list-group-item">Top Speed -  185 kmph</li>
  </ul>
</div>
<div className="card card-block mt-1 col-12">
   <img src={rc5} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Citroen eC3</h5>
    <p className="card-text fs-6"><strong>Price <small>In India</small> - &#8377;11.50 lakh</strong></p>
    <p className="card-text fs-8">Citroen eC3 price for the base model starts at Rs. 11.50 Lakh and the top model price goes upto Rs. 12.68 Lakh (Avg. ex-showroom). eC3 price for 4 variants is listed below.</p>
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">Driving Range - 320 Km</li>
    <li className="list-group-item">Seating Capacity - 5 Seater</li>
    <li className="list-group-item">Battery Capacity - 29.2 kWh</li>
  </ul>
</div>
<div className="card card-block mt-1 col-12">
   <img src={rc6} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">MG ZS EV</h5>
    <p className="card-text fs-6"><strong>Price <small>In India</small> - &#8377;22.88-26.00 lakh</strong></p>
    <p className="card-text fs-8">MG ZS EV price for the base model starts at Rs. 22.88 Lakh and the top model price goes upto Rs. 26.00 Lakh (Avg. ex-showroom). ZS EV price for 5 variants is listed below.</p>
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">Driving Range - 461 Km</li>
    <li className="list-group-item">Seating Capacity - 5 Seater</li>
    <li className="list-group-item">Battery Capacity - 50.3 kWh</li>
  </ul>
</div>
<div className="card card-block mt-1 col-12">
   <img src={rc7} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Kia EV6 </h5>
    <p className="card-text fs-6"><strong>Price <small>In India</small> - &#8377;60.95-65.95 lakh</strong></p>
    <p className="card-text fs-8">Kia EV6 price for the base model starts at Rs. 60.95 Lakh and the top model price goes upto Rs. 65.95 Lakh (Avg. ex-showroom). EV6 price for 2 variants is listed below.</p>
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">Driving Range - 708 Km</li>
    <li className="list-group-item">Seating Capacity - 5 Seater</li>
    <li className="list-group-item">Top Speed - 192 kmph</li>
  </ul>
</div>

   </div>
   
    </>
  )
}
