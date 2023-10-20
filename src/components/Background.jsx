import React from "react";
import slayyyter from "../assets/img/slytr.png";

export const Background = () => {
  return (
    <>
      <section className="background">
        <img src={slayyyter} loading="lazy" />
      </section>
      <section>
        <p>&copy; {(new Date()).getFullYear()} <a href='https://crlarrea.github.io' target='_blank'>crlarrea</a></p>
      </section>
    </>
  );
};
