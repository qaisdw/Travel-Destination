

function ToursFun(props){
    return (
        <>
            <h2>{props.travel_name}</h2>
            <img src={props.travel_img}  alt={props.travel_name} />
        </>
    );
}

export default ToursFun;