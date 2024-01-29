import React from "react";
import "./parallex.scss";

export const Parallex = () => {
  return (
    <div className="container">
      <h1>PROJECTS</h1>
      <div className="mountains"></div>
      <div className="planets"></div>
      <div className="stars"></div>
      <video autoPlay muted loop src="/blackhole.webm"></video>
    </div>
  );
};
