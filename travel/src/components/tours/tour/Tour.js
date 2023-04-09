import "./Tour.css"

function TourFun(props){
    return (
        <div class="Tour">
            <div class="card">
                <h2>{props.travel_name}</h2>
                <img src={props.travel_img}  alt={props.travel_name} />
            </div>
        </div>
    )
}

export default TourFun;