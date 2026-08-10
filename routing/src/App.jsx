import Navbar from "./components/Navbar";

import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Service from "./components/Service";
import Help from "./components/Help";
import Footer from "./components/Footer"

import { Routes, Route } from "react-router-dom";

function App() {

    return (
        <>
            <Navbar />
           

            <Routes>

                <Route path="/" element={<Home/>}/>
                
                <Route path="/about" element={<About />} />

                <Route path="/contact" element={<Contact />} />

                <Route path="/service" element={<Service />} />

                <Route path="/help" element={<Help />} />

            </Routes>

             <Footer/>

        </>
    );
}

export default App;