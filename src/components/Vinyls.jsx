import React from "react";
import vinyl1 from "../assets/img/vinyl_1.png";
import vinyl2 from "../assets/img/vinyl_2.png";
import cd from "../assets/img/cd.png";
export const Vinyls = () => {
  return (
    <section className="vinyls">
      <img src={vinyl1} />
      <img src={vinyl2} />
      <img src={cd} />
    </section>
  );
};
