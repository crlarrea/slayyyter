import React from "react";
import { socialMedia } from "../assets/data/Data";
export const SocialMedia = () => {
  return (
    
      <ul className="social-media">
        {socialMedia.map((entry) => {
          return (
            <li key={entry.name}>
              <a href={entry.url} target="_blank" aria-label={entry.name}>
                {entry.icon}
              </a>
            </li>
          );
        })}
      </ul>
    
  );
};
