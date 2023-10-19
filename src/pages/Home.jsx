import React from "react";
import { Spotify } from "../components/Spotify";
import { Vinyls } from "../components/Vinyls";
import { SocialMedia } from "../components/SocialMedia";
import { Background } from "../components/Background";
import { About } from "../components/About";
import { Tours } from "../components/Tours";

export const Home = () => {
  return (
    <main>
      <div>
        <Background />
      </div>
      <div>
        <SocialMedia />
        <About /> 
        <Spotify />
        <Vinyls />
        <Tours/>
      </div>
    </main>
  );
};
