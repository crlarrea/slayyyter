import React from "react";
import { Spotify } from "../components/Spotify";
import { Vinyls } from "../components/Vinyls";
import { Background } from "../components/Background";
import { About } from "../components/About";
import { Tours } from "../components/Tours";

export const Home = () => {
  return (
    <>
      <div>
        <Background />
      </div>
      <div>
        <About /> 
        <Spotify />
        <Vinyls />
        <Tours />
      </div>
    </>
  );
};
