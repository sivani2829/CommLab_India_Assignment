
const Regestration=()=>{
    return(
        <div className="bg-light d-flex flex-column justify-content-center">
            <h1>Register For The FREE Webinar</h1>
            <div className="d-flex">
                <div className="m-2">
                <label>First Name*</label><br/>
                <input type="text" placeholder="First name" className="form-control"/>
                </div>
                <div className="m-2">
                <label>Last Name*</label><br/>
                <input type="text" placeholder="Last name" className="form-control"/>
                </div>
            </div>
            <div>
            <label>Business Email</label><br/>
            <input type="text" placeholder="Business Email" className="form-control"/>
            </div>
            <div>
            <label>Phone Number</label><br/>
            <input type="text" placeholder="Phone Number" className="form-control"/>
            </div>
             <button className="btn btn-warning m-2">Secure Your Seat</button>
        </div>

    )
}
export default Regestration