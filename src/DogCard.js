import React from "react"
function DogCard(props){
    return( 
     <div>
         {props.denver.map(dogUrl => {
             {console.log("++++++++++") }
             return <img src={dogUrl} className="dogpic" />
         })}
     </div>
    )
 };
 
 export default DogCard;