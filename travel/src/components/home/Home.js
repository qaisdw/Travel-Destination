import FooterFun from "../footer/Footer"
import HeaderFun from "../header/Header"
import ToursFun from "../tours/Tours"
import NavFun from "../Navbar/Navbar";
import "./Home.css"

function HomeFun(props){
    const data = props.data
    return (
        <>
        <NavFun/>
        <HeaderFun/>
        <ToursFun data={data}/>
        {/* {
            data.map((element) => {
                return <ToursFun travel_name={element.name}  travel_img={element.image}/>
            })
        } */}
        <FooterFun/>
        </>
    )
}

export default HomeFun;