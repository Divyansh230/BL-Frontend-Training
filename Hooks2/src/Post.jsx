import React from "react";

const Post=React.memo(({value})=>{

    console.log("Post rerender")
    return (
        <>
            <h1>Your name is {value.name} and age is {value.age}</h1>
        </>
    )
})