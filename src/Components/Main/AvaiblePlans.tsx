"use client"
import Free from "../jsonData/plans/Free.json"
import PayHowMuchYouWanna from "../jsonData/plans/PayHowMuchUsYouWanna.json"
import Platinum from "../jsonData/plans/Platinum.json"
import Plans from "@/Components/Main/Plan";

const AvaiblePlans =()=>{
    return(
        <>
        <div className="pr-4 pt-5">
<Plans Title={Free.Title} benefits={Free.Benefits}></Plans>
        </div>
            <div className="pr-4 pt-5 ">
<Plans Title={PayHowMuchYouWanna.Title} benefits={PayHowMuchYouWanna.Benefits} redirect={PayHowMuchYouWanna.Redirect} Price={PayHowMuchYouWanna.Price}></Plans>
            </div>
            <div className="pt-5">
<Plans Title={Platinum.Title} benefits={Platinum.Benefits} redirect={Platinum.Redirect} Price={Platinum.Price}></Plans>
            </div>
        </>
    )
}
export default AvaiblePlans;