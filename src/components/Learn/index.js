import { Check, Person } from "../../icons"
import Regestration from "../Regestration"
const learnStack=[{id:1,title:"Evolution of AI and Corporate Training"},{id:2,title:"How AI can close skills gaps with rapid upskilling and reskilling"},{id:3,title:"Steps to integrate AI tools in training programs"},{id:4,title:"Challenges and opportunities with AI implementation"},{id:5,title:"Roadmap to align training with business goals"},{id:6,title:"Live action – creating assets with Vyond Go, Synthesia, Quizbot"},{id:7,title:"Best way Learning Architects can use AI"}]

const Learn=()=>{
    return(
        <div className="robo-bg col-12 d-flex flex-column justify-content-center align-items-center bg-light">
            <h1 className="text-dark">YOU WILL LEARN:</h1>
            <div>{
                learnStack.map((e)=>(
                    <div className="d-flex" key={e.id}>
                    <Check className="mt-2"/>
                    <h4 className="ml-1">{e.title}</h4>
                    
                </div>
                ))
                }</div>
            <div>
                <h1>Unleashing the Potential of AI in Corporate Training</h1>
                
            </div>
            <h4 className="text-dark">The Impact of AI on L&D – Insights and Applications</h4>
            <h3>Tuesday, January 09, 2024<br/>11 am Eastern | 8 am Pacific<br/>Duration: 90 Minutes</h3>
            
          
<button type="button" class="btn btn-danger p-3 m-3" data-toggle="modal" data-target="#exampleModalCenter">
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

    )
}
export default Learn