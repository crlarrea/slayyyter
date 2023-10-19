import {
  AiOutlineGlobal,
  AiOutlineYoutube,
  AiOutlineInstagram,
} from "react-icons/ai";

import vinyl1 from "../img/vinyl_1.png";
import vinyl2 from "../img/vinyl_2.png";
import vinyl3 from "../img/vinyl_3.png";
import cd1 from "../img/cd.png";
const socialMedia = [
  {
    name: "webs",
    icon: <AiOutlineGlobal />,

    url: "https://slayyyter.lnk.to/STARFUCKER/",
  },
  {
    name: "instagram",
    icon: <AiOutlineInstagram />,
    url: "https://www.instagram.com/slayyyter/",
  },
  {
    name: "youtube",
    icon: <AiOutlineYoutube />,

    url: "https://www.youtube.com/channel/UCjbIFp5s_kUgrH1S8-bG0vw/",
  },
  //   {
  //     name: "spotify",
  //     url: "https://open.spotify.com/artist/4QM5QCHicznALtX885CnZC/",
  //   },
  //   {
  //     name: "itunes",
  //     url: "https://music.apple.com/us/artist/slayyyter/1424342162/ ",
  //   },
];

const albums = [
  {
    name: "starfucker vinyl - glass",
    tracks: [
      "I Love Hollywood!",
      "Miss Belladonna",
      "Dramatic",
      "My Body",
      "Memories Of You",
      "Rhinestone Heart",
      "Erotic Electronic",
      "Purrr",
      "Plastic",
      "Girl Like Me",
      "Tear Me Open",
      "Out Of Time",
    ],
    price: 30,
    image: vinyl1,
  },
  {
    name: "starfucker vinyl - transparent mauve",
    tracks: [
      "I Love Hollywood!",
      "Miss Belladonna",
      "Dramatic",
      "My Body",
      "Memories Of You",
      "Rhinestone Heart",
      "Erotic Electronic",
      "Purrr",
      "Plastic",
      "Girl Like Me",
      "Tear Me Open",
      "Out Of Time",
    ],
    price: 30,
    image: vinyl2,
  },
  {
    name: "troubled paradise vinyl - transparent",
    tracks: [
      "Track List:",
      "Self Destruct (feat. Wuki)",
      "Venom",
      "Throatzilla",
      "Dog House",
      "Butterflies...",
      "Troubled Paradise",
      "Clouds",
      "Cowboys",
      "Serial Killer",
      "Over This!",
      "Villain",
      "Letters",
    ],
    price: 30,
    image: vinyl3,
  },
  {
    name: "starfucker CD",
    tracks: [
      "I Love Hollywood!",
      "Miss Belladonna",
      "Dramatic",
      "My Body",
      "Memories Of You",
      "Rhinestone Heart",
      "Erotic Electronic",
      "Purrr",
      "Plastic",
      "Girl Like Me",
      "Tear Me Open",
      "Out Of Time",
    ],
    price: 15,
    image: cd1,
  },
];
export { socialMedia, albums };
