import './index.css'

let data=require('../host.json')

const Hosts=()=>{
    return(
        <div className="col-12 bg-dark d-flex flex-column justify-content-center align-items-center">
            <h1 className="text-light col-12 text-center mt-3">MEET YOUR HOSTS</h1>
            <div className="m-5 col-11 m-3 host-cls">
                {data.map((e)=>
                <div className="p-4">
                    <img src={e.imageUrl} className="w-75"/>
                    <h1 className="text-light m-2 p-2">{e.name}</h1>
                    <h4 className="text-light m-2 p-2">{e.role}</h4>
                    <p className="text-light m-2 p-2">{e.desc1}</p>
                    <p className="text-light m-2 p-2">{e.desc2}</p>
                    <p className="text-light m-2 p-2">{e.desc3}</p>

                </div>)}
            </div>
        </div>
    )
}
export default Hosts