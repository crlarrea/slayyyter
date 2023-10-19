import {
  AiOutlineGlobal,
  AiOutlineYoutube,
  AiOutlineInstagram,
} from "react-icons/ai";

import vinyl1 from '../img/vinyl_1.png';

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

const albums = [{ name: "starfuck vinyl", price: 30, image: vinyl1 }];
export { socialMedia, albums};
