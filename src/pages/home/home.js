import React from "react";
import Header from "../../components/header/header";
import "./home.css";
import Trailer from "../../components/trailer/trailer";
import Cards from "../../components/cards/cards";
import Footer from "../../components/footer/footer";

function Home() {

    return (
        <div>
            <Header/>
            <div id="banner"></div>
            <Trailer/>
            <Cards/>
            <Footer/>
        </div>
    )
};

export default Home;