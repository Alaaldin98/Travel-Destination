import React from "react";

import Home from "./components/home/Home";
// import Header from './components/header/Header';
// import Footer from "./components/footer/Footer";
// import Tours from "./components/tours/Tours"
import data from './data.json'

function App(){
    return(
        <>
            {/* <Header /> */}
            <Home data={data} />
            {/* <Tours data={data}/> */}
            {/* <Footer /> */}
        </>
        
    )
}

export default App;