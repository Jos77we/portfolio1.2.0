import React from 'react'
import { Link } from "react-router-dom";

const Resume = () => {
  return (
    <>
    <div style={{height:'100vh', display:'flex', alignItems:'center', justifyContent:'center', backgroundColor:'#052659'}}>
      <div style={{height:'85vh', width:'95%', backgroundColor:'black'}}>
        <div style={{height:'50px', border:'1px solid purple'}}>
      <p>
              <Link to="/" style={{ color: "red", textDecorationLine: "none" }}>
                Home
              </Link>
            </p>
            </div>
            <div style={{height:'70vh', border:'1px solid blue', display:'flex', alignItems:'center', justifyContent:'center'}}>
            <div style={{height:'70vh', width:'25%', border:'1px solid gold'}}>
              <div style={{height:'30%', backgroundColor:'#364649'}}></div>
            </div>
            <div style={{height:'70vh', width:'60%', border:'1px solid pink'}}>
              <div style={{height:'40%', background:'blue'}}></div>
              <div style={{height:'60%', background:'red'}}></div>
            </div>
            </div>
            <div style={{height:'5vh', border:'1px solid aqua'}}></div>
        </div>
        </div>
    </>
  )
}

export default Resume