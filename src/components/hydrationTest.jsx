// "use client";

// import { useEffect, useState } from 'react';

"use client"

const HydrationTest = () => {

    // const [isClient, setIsClient] = useState(false);

    // useEffect(()=>{
    //     setIsClient(true);
    // },[]);


    // this is how we can prevent hydration problem

    const a = Math.random();
    
    console.log(a);


    return (
        <div>{a}</div>
    )
}

export default HydrationTest