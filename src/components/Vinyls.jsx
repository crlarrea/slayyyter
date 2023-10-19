import React, { useState } from "react";
import { albums } from "../assets/data/Data";

export const Vinyls = () => {
  const [currentSelection, setSelection] = useState();
  const updateAlbum = (entry) => {
    setSelection(entry);
  };
  return (
    <section className="vinyls">
      <article>
        <h2>Albums</h2>
      </article>
      {albums.map((entry) => {
        return (
          <article
            key={`album-${entry.name}`}
            onClick={() => {
              updateAlbum(entry);
            }}
          >
            <img src={entry.image} />
            {/* <p>{entry.name}</p> */}
          </article>
        );
      })}
      {currentSelection && (
        <article id="album-description">
          <h3>{currentSelection.name}</h3>
          <span>
            {Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(currentSelection.price)}
          </span>
          <ol>
            {currentSelection.tracks.map((track, index) => {
              return <li key={`${currentSelection.name}-${track}`}>{track}</li>;
            })}
          </ol>
          <a href="#">buy</a>
        </article>
      )}
    </section>
  );
};