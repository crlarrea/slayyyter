import {
  AiOutlineGlobal,
  AiOutlineYoutube,
  AiOutlineInstagram,
} from "react-icons/ai";

import vinyl1 from "../img/vinyl_1.webp";
import vinyl2 from "../img/vinyl_2.webp";
import vinyl3 from "../img/vinyl_3.webp";
import cd1 from "../img/cd.webp";
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

const tours =[
  { date: "OCT 26, 2023", venue:'Royale', city:'Boston, MA', guest:'with special guest Miss Madeline' },
  { date: "OCT 27, 2023", venue:'Brooklyn Steel', city:'Brooklyn, NY', guest:'with special guests BAYLI & Miss Madeline' },
  { date: "OCT 25, 2023", venue:'9:30 Club', city:'Washington, D.C.', guest:'with special guest BAYLI' },
  { date: "OCT 28, 2023", venue:'Theatre of Living Arts', city:'Philadelphia, PA', guest:'with special guest BAYLI' },
  { date: "OCT 31, 2023", venue:'The Opera House', city:'Toronto, ON', guest:'with special guest BAYLI' },
  { date: "NOV 2, 2023" , venue:'Newport Music Hall', city:'Columbus, OH', guest:'with special guest BAYLI'},
  { date: "NOV 3, 2023" , venue:'Saint Andrew\'s Hall', city:'Detroit, MI', guest:'with special guest BAYLI'},
  { date: "NOV 4, 2023" , venue:'House of Blues Chicago', city:'Chicago, IL', guest:'with special guest BAYLI'},
  { date: "NOV 6, 2023" , venue:'Summit', city:'Denver, CO', guest: 'with special guest BAYLI'},
  { date: "NOV 7, 2023" , venue:'Soundwell', city:'Salt Lake City, UT',guest: 'with special guest BAYLI'},
  { date: "NOV 10, 2023", venue:'The Regency Ballroom', city:'San Francisco, CA', guest:'with special guest BAYLI' },
  { date: "NOV 11, 2023", venue:'The Novo', city:'Los Angeles, CA', guest:'with special guests Lolo Zouaï, BAYI, Miss Madeline' },
  { date: "NOV 12, 2023", venue:'The Observatory North Park', city:'San Diego, CA', guest:'with special guest BAYLI' },
  { date: "FEB 11, 2024", venue:'3Olympia Theatre', city:'Dublin, County Dublin', guest:'' },
  { date: "FEB 13, 2024", venue:'SWG3 Studio Warehouse', city:'Glasgow, Scotland', guest:'' },
  { date: "FEB 14, 2024", venue:'O2 Ritz Manchester', city:'Manchester, UK', guest:'' },
  { date: "FEB 17, 2024", venue:'O2 Forum Kentish Town', city:'London, England', guest:'' },
];



export { socialMedia, albums, tours };
