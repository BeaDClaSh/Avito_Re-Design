"use client"
import {useState} from "react";
import Image from "next/image";
import SplitText from "@/Components/SplitText";


interface ItemDetailsProps{
    ItemData:{
        id: string;
        name: string;
        description: string;
        imageUrl: string;
        tags: string[];
        sellerId: string;
        localisation: string;
        status: "new" | "old" |"good";

    }
}
const ItemDetails:React.FC<ItemDetailsProps> = ({ItemData}) => {
    const[ShowDetails,setShowDetails]=useState(false);
  return (
      <div>
          {ShowDetails ? (<div>
              <form className="bg-gray-700">
              <Image src={ItemData.imageUrl} alt={"Object Image"} />
              <div className="grid grid-cols-2 text-gray-400">
                  <p>state: <span><SplitText text={ItemData.status}/></span></p>
                  <p>localisation: <span><SplitText text={ItemData.localisation}/></span></p>
              </div>
              <button onClick={() => setShowDetails(!ShowDetails)}><h2>Show Details</h2>
              </button>
              </form>
          </div>) : (<div>
              <form className="bg-gray-700">
              <Image src={ItemData.imageUrl} alt={"Object Image"} />
              <div className="grid grid-cols-2 text-gray-400">
                  <p>state: <span><SplitText text={ItemData.status}/></span></p>
                  <p>localisation: <span><SplitText text={ItemData.localisation}/></span></p>
              </div>
              <button onClick={() => setShowDetails(!ShowDetails)}><h2>Close Details</h2> </button>
              </form>
          </div>)}

      </div>
  )
}
export default ItemDetails;