

import { useState } from "react";
import "./App.css";
import wild from "./wildanimals.jpg";
import sportPic from "./sports.jpg";
import music from "./music.jpg";
import panda from "./panda.jpg";
import ali from "./ali.jpg";
import michael from "./mjackson.jpg";


function InsideAnimal() {
  return (
    <div>
      <img height={630} width={1280} src={panda} />
    </div>
  )

}
function InsideSports() {
  return (
    <div>
      <img height={630} width={1280} src={ali} />
    </div>
  )
}


function InsideMusic() {
  return (
    <div>
      <img height={630} width={1280} src={michael}/>
    </div>
  )
}
function Animal({onClick}) {

  return(
    <div className="flex-items" >
      <img onClick={onClick} height={100}src={wild} />
      
    </div>

  )
}

function Sports({onClick}) {
  return (
    <div className="flex-items">
    <img onClick={onClick} height={100} width={160}src={sportPic} />
  </div>

  )
}

function Music({onClick}) {
  return (
    <div className="flex-items" >
      <img  onClick={onClick} height={100} width={160} src={music}/>
      
    </div>

  )
}


function RenderHelper({viewAnimal, viewAnimal1, viewAnimal2, onClick, onClick1, onClick2}) {

  let Render;

  if (viewAnimal) {
    Render = (<div><InsideAnimal /></div>)
  } else if (viewAnimal1) {
    Render = (<div><InsideSports /></div>)
    
  } else if (viewAnimal2) {
    Render = (<div><InsideMusic /></div>)
  } else {
    Render = (<div className="flex-container"  id="services">
      <Animal onClick={onClick} />
      <Sports onClick={onClick1} />
      <Music onClick={onClick2}/>
      </div>)
  }



  return (
    <div>
    {Render}
    </div>

  )
}


export default function App() {
  const [viewAnimal, setViewAnimal] = useState( {
    A: false,
    S: false,
    V: false
  });

  function handleAnimal() {
    setViewAnimal(prevData => {
      return {
        ...prevData,
        A: true
      }
      
    });
  }

  function handleSports() {
    setViewAnimal(prevData => {
      return {
        ...prevData,
        S: true
      }
      
    });

  }

  function handleViewer() {
    setViewAnimal(prevData => {
      return {
        ...prevData,
        V: true
      }
      
    });

  }

  
  

  return (
    <div>
      About me
    <div className="services" >
    <RenderHelper viewAnimal={viewAnimal.A} 
    viewAnimal1={viewAnimal.S} 
    viewAnimal2={viewAnimal.V} 
    onClick={handleAnimal} 
    onClick1={handleSports} 
    onClick2={handleViewer}  />
    </div>
    </div>
    
  )
}