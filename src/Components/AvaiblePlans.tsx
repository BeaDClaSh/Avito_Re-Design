"use client"
import Free from "./jsonData/plans/Free.json"
import PayHowMuchYouWanna from "./jsonData/plans/PayHowMuchUsYouWanna.json"
import Platinum from "./jsonData/plans/Platinum.json"
import Plans from "@/Components/Plan";

const AvaiblePlans =()=>{
    return(
        <>
        <div>
<Plans Title={Free.Title} benefits={Free.Benefits}></Plans>
        </div>
            <div>
<Plans Title={PayHowMuchYouWanna.Title} benefits={PayHowMuchYouWanna.Benefits}></Plans>
            </div>
            <div>
<Plans Title={Platinum.Title} benefits={Platinum.Benefits}></Plans>
            </div>
        </>
    )
}
export default AvaiblePlans;