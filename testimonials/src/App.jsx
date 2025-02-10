import { useState } from "react";
import "./App.css";
import MainTestimonials from "./MainTestimonialsSection";
import SecondaryTestimonials from "./SecondaryTestimonials";

function App() {
  return (
    <>
      <div className="container">
        <div className="testimonials-wrapper">
          <MainTestimonials />

          <SecondaryTestimonials />
        </div>
      </div>
    </>
  );
}

export default App;
