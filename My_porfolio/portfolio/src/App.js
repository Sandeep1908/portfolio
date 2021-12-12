import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Whole from "./components/Whole";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Projectpage from "./components/Projectpage";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Allprojects from "./components/Allprojects";
import Resume from "./components/Resume";
import { useDispatch } from "react-redux";
import { setData } from "./features/ProjectSlice/projectSlice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const get_data = async () => {
      const res = await fetch("http://localhost:8000/");
      const result = await res.json();
      const data = result.map((curr) => {
        return curr;
      });
      dispatch(setData(data));
    };
    get_data();
  }, []);

  useEffect(() => {
    Aos.init({
      easing: "ease-in-out",
      duration: 700,
    });
  }, []);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Whole />} />
          <Route path="/detail/:id" element={<Projectpage />} />
          <Route path="/allprojects" element={<Allprojects />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </BrowserRouter>
      <Contact />
      <Footer />
    </>
  );
}

export default App;
