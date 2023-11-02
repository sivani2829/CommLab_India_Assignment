import { Person } from "../../icons"
import Regestration from "../Regestration"

const Details=()=>{
    return(
        <>
        <div className="col-12 d-flex flex-column justify-content-center align-items-center p-3">
            <h1 className="text-light m-2">Unleashing the Potential of AI in Corporate Training</h1>
            <h4 className="text-light ">The Impact of AI on L&D – Insights and Applications</h4>
            <h3 className="text-light ">Tuesday, January 09, 2024<br/>11 am Eastern | 8 am Pacific<br/>Duration: 90 Minutes</h3>  
<button type="button" class="btn btn-danger p-3 m-3" data-toggle="modal" data-target="#exampleModalCenter">
Secure your seat
</button>
<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <Regestration/>
      </div>
    </div>
  </div>
</div>     
        </div>
        <div className="bg-dark d-flex justify-content-between align-items-center p-3">
            <div>
                <img src="https://resources.commlabindia.com/hubfs/commlab_logo/cl-logo-final-white.png"/>
                <p className="text-light">Copyright © 2023, CommLab India</p>
            </div>
          <p className="text-light">Privacy Policy | Site Map</p>
        </div>
        
    </>
    )

}
export default Details