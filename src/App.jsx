import React from "react"
import Navbar from "./componets/Navbar";
import Home from "./componets/Home";
import Body from "./componets/Body";
import Footer from "./componets/Footer";
import './App.css'

const App = () => {

    return (
        <div className="container">
            <Home />
            <Body />
            <Footer />
             
        </div>
    )
}

export default App;