import { useState } from "react";
import { useParams } from "react-router";
import NavFun from "../Navbar/Navbar";
import FooterFun from "../footer/Footer"
import "./TourDetails.css"

function TourDital (props){
    let {id} = useParams()

    const [ReadMore , setReadMore] = useState(false);

    return(
        <>
            <NavFun/>
            {
                props.data.map((element) => {
                    if(element.id === id){
                        return (
                            <div class="TourDetails">
                                <h1>{element.name}</h1>
                                <img src={element.image} alt={element.name}/>
                                <div class="text">
                                    <p>{`The Price is ${element.price} $`}</p>
                                    <div>
                                        {
                                            ReadMore?<>
                                            <p>{element.info}</p>
                                            <button onClick={()=>setReadMore(false)}>Show Less</button>
                                            </>
                                            :
                                            <>
                                            <p>{(element.info).substring(0,200)}</p>
                                            <button onClick={()=>setReadMore(true)}>Show More</button>
                                            </>
                                        }
                                    </div>
                                </div>
                            </div>
                        )
                    }
                })
            }
        <FooterFun/>
    </>
            
)}
        

export default TourDital;