

function ToursFun(props){
    return (
        <div>
            <h2>{props.travel_name}</h2>
            <img src={props.travel_img}  alt={props.travel_name} />
        </div>
    );
}

export default ToursFun;