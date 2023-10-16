import React from "react";
import { socialMedia } from "../assets/data/Data";
export const SocialMedia = () => {
  return (
    <section className="social-media">
      <ul>
        {socialMedia.map((entry) => {
          return (
            <li key={entry.name}>
              <a href={entry.url} target="_blank">
                {entry.icon}
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
