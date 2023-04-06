import FooterFun from "../footer/Footer"
import HeaderFun from "../header/Header"
import ToursFun from "../tours/Tours"


function HomeFun(props){
    const data = props.data
    return (
        <>
        <HeaderFun/>
        {
            data.map((element) => {
                return <ToursFun travel_name={element.name}  travel_img={element.image}/>
            })
        }
        <FooterFun/>
        </>
    )
}

export default HomeFun;