import React from 'react'

export default function Feedback() {
    return (
        <>
            <div className="container-fluid">
                <form action="">
                <div className="mb-3">
                    <label className="form-label">Full Name</label>
                    <input type="Name" className="form-control" placeholder="Enter Your Full Name" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Phone Number</label>
                    <input type="number" className="form-control" placeholder="Enter Your PH.No" />
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Email address</label>
                    <input type="email" className="form-control" placeholder="name@gmail.com" />
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlTextarea1" className="form-label">Feedback</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <div className="mb-3">
                    <button type="submit" className="btn btn-primary w-100">Submit</button>
                </div>
                </form>
            </div>
        </>
    )
}
