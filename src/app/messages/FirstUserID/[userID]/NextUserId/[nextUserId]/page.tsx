import React from "react";

interface ItemPageProps{
    params:{
        userId:string,
        nextUserId:string,
    }
}

const Message1to1:React.FC<ItemPageProps> = ({params}) => {

    return (
        <div>
            <h1>{params.userId}</h1>
            <h1>{params.nextUserId}</h1>
        </div>
    )
}
export default Message1to1;