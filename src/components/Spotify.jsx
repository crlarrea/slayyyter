import React from "react";

export const Spotify = () => {
  return (
    <section className="spotify">
      <iframe
        style={{borderRadius:"10px"}}
        src="https://open.spotify.com/embed/artist/4QM5QCHicznALtX885CnZC?utm_source=generator"
        width="100%"
        height="352"
        frameBorder="0"
        allowfullscreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </section>
  );
};
