import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import data from './data.json'

function App(){
    return(
        <>
  <Routes>
        <Route path="/" element={<Home data={data} />} />
        <Route path="/city/:id/" element={<TourDetails data={data} />} />
      </Routes>      
        </>
        
    )
}

export default App;