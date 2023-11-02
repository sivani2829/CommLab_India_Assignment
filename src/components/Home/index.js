import { Check, Person } from '../../icons'
import Regestration from '../Regestration'


const Home=()=>{
    return (
        <>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1 className="text-light">"Some people call this artificial intelligence, but the reality is this technology will enhance us. So, instead of artificial intelligence, I think we’ll augment our intelligence” - Ginni Rometty – Former CEO & President, IBM</h1>
                </div>
                <div className="col-12 col-md-4 col-lg-4">
                <img src="https://resources.commlabindia.com/hs-fs/hubfs/webinars/corporate-training-with-ai-banner-image.png?width=525&height=734&name=corporate-training-with-ai-banner-image.png" className="w-100"/>
                </div>
                <div className="d-flex col-12 col-md-8 col-lg-8">
                    <div className="bg-light card p-3 d-flex flex-column justify-content-center align-items-center w-100">
                        <h4 className="text-center">The Top Trending Topic of the Year</h4>
                        <h1 className="text-danger">Unleashing the Potential of AI in Corporate Training</h1>
                        <div>
                        <div className="d-flex">
                            <Check className=""/>
                            <p className="ml-1">Learn how AI is helping corporates upskill and reskill workforce</p>

                        </div>
                        <div className="d-flex">
                            <Check/>
                            <p className="ml-1">Walk away with tips, tools, and resources to get started with AI-empowered training</p>
                        </div>
                        </div>
                        <div className="bg-dark  w-100 p-2">
                            <h2 className="text-light">JOIN DR RK Prasad, Shalini, Rajesh LIVE</h2>
                        </div>

                         <div className="address m-3">
                            <h5 className="">Tuesday, January 09, 2024 <br/>  11 AM Eastern | 8 AM Pacific <br/> Duration: 90 Minutes <br/>$997 VALUE FREE! </h5>
                         </div>    
<button type="button" class="btn btn-danger p-4" data-toggle="modal" data-target="#exampleModalCenter">
<Person/>  Secure your seat
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
                </div>
                <div className="col-11 col-md-12 bg-danger m-3 image-cls  d-flex justify-content-center align-items-center">
         <img src="https://resources.commlabindia.com/hubfs/webinars/logos-v2.png" className="w-75"/>
     </div>
            </div>
        </div>
     </>
    )
}
export default Home