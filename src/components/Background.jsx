import React from "react";
import slayyyter from "../assets/img/slytr.png";
import { SocialMedia } from "./SocialMedia";

export const Background = () => {
  return (
    <>
      <section className="background">
        <img src={slayyyter} loading="lazy" />
        <SocialMedia />
      </section>
      
    </>
  );
};
