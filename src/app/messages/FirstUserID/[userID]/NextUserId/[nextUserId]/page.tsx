"use client"
import React from "react";
import {useParams} from "next/navigation";


const Message1to1 = () => {
const params=useParams();

const userId=params.userId as string;
    const nextUserId=params.nextUserId as string;

    return (
        <div>
            <h1>{userId}</h1>
            <h1>{nextUserId}</h1>
        </div>
    )
}
export default Message1to1;