import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import injectContext from "./flux/appContext";
import BarraSuperior from "./components/Nav";

const Layout = () =>{

    return (
        <BrowserRouter>
            <BarraSuperior />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
}

export default injectContext(Layout);