import { Link } from "react-router-dom";
import "./Tours.css"
import TourFun from "./tour/Tour"

function ToursFun(props){
    return (
        
    props.data.map(element =>{
        return(
            <div key={element.id}>
                <Link to={`/city/${element.id}`}>
                    <TourFun travel_name={element.name}  travel_img={element.image}/>
                </Link>
            </div>
        )
    }));
}

export default ToursFun;