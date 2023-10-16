import React from "react";
import slayyyter from "../assets/img/slytr.png";
import { Spotify } from "../components/Spotify";
import { Vinyls } from "../components/Vinyls";
import { Instagram } from "../components/Instagram";
import { SocialMedia } from "../components/SocialMedia";

export const Home = () => {
  return (
    <section className="home">
      <article>
        <img src={slayyyter} className="bkg" />
      </article>
      <article>
        <SocialMedia />
        <Spotify />
        <Vinyls />
        <Instagram />
      </article>
    </section>
  );
};
