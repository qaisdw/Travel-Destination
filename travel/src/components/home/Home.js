import FooterFun from "../footer/Footer"
import HeaderFun from "../header/Header"
import ToursFun from "../tours/Tours"
const travelData = require("../../data/db.json")

function HomeFun(){
    return (
        <>
        <HeaderFun/>
        <div>
            {
                travelData.map((element) => {
                    return <ToursFun travel_name={element.name}  travel_img={element.image}/>
                })
            }
        </div>
        <FooterFun/>
        </>
    )
}

export default HomeFun;