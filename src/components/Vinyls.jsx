import React from "react";
import { albums } from "../assets/data/Data";
export const Vinyls = () => {
  return (
    <section className="vinyls">
      {albums.map((entry, index) => {
        return (
          <article>
            <img src={entry.image} />
            <p>
              {entry.name}{" "}
              <span>
                {Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD",
                }).format(entry.price)}
              </span>
            </p>
          </article>
        );
      })}
    </section>
  );
};
