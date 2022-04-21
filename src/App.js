import React, { Component } from "react";
import Preloader from "./components/preloader/preloader.js";
import Hero from "./components/hero/hero.js";
import Footer from "./components/footer/footer.js";
import "./App.scss";

function App() {
    return (
        <main className="home-page">
            <Preloader />
            <Hero />
            <Footer />
        </main>
    );
}

export default App;
