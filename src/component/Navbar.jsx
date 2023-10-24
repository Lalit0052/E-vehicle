import React from 'react'
import { Link } from 'react-router-dom'
export default function Navber() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid bg-dark">
          <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>          <Link className="navbar-brand text-light me-auto ms-auto p-2 fs-3" to="/"><strong>E-Vehicle</strong></Link>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">

            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active text-light" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active text-light" aria-current="page" to="/bike-section">Bike</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/car-section">Car</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link text-light " to='/feedback'>Feedback</Link>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-light me-2" type="submit">Search</button>
            </form>          </div>
            <button className="btn ms-2 btn-light" type="submit"><span className="material-symbols-outlined">location_on</span></button>
        </div>
      </nav>
    </>
  )
}
