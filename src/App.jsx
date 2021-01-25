import React, { useState } from "react";
import "./App.scss";

const App=()=>{
  const [data,setdata]=useState("");
  const inputevent=(event)=>setdata(event.target.value);
  return (
    <> 
    <div className="content-center">
      <div className="card">
        <h1>Live Image Search</h1>
        <div className="inputs">
          <input type="search" value={data} onChange={inputevent} name="" id="" placeholder="Enter Images Name"/>
        </div>
        <div className="image">
           <img src={`https://source.unsplash.com/200x300/?${data}`} alt=""/>
        </div>
      </div>
    </div> 
    
    </>
  )
}
export default App;