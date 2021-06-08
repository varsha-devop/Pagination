import logo from './logo.svg';
import React, { useState, useEffect } from "react";
import './App.css';
import axios from "axios";
import DogCard from "./DogCard.js"

function App() {

  const [url, setUrl]= useState([]);
  const [imageUrl, setImageUrl]= useState();
  const [count, setCount]= useState(0)
  const [quitApiCalls, setQuitApiCalls]=useState(0)

  

  useEffect(()=>{
    axios.get("https://api.thedogapi.com/v1/images/search")
    .then(response=>{

      if(count<11){
        console.log("your in the use effect")
        const dog = response.data[0].url
        console.log(...url)
        console.log(imageUrl)
        console.log(count)
        setUrl([...url,dog])
        setCount(count+1)
        setImageUrl(dog)
      }
    })
  },[count])

  useEffect(()=>{
    axios.get("https://api.thedogapi.com/v1/images/search")
    .then(response=>{
      console.log("your in the use effect")
      const dog = response.data[0].url
      setImageUrl(dog)
    })
  },[imageUrl])


  return (
    <div>
      <DogCard denver={url}/>
    </div>
  );
}

export default App;
