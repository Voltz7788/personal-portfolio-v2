"use client";
import Image from "next/image";
import React from "react";
import jessicaImage from "@/public/jessica.jpeg";
import Fireworks from "react-canvas-confetti/dist/presets/fireworks";
import Meme1 from "@/public/meme-1.jpg";
import Meme2 from "@/public/meme-2.jpg";
import AudioPlayer from "../components/AudioPlayer";
import Howl from "react-howler";

export default function page() {
  return (
    <div className="h-max bg-white py-20">
      <h1 className="text-5xl text-center font-semibold">
        JESSICA GOT INTO CAMBRIDGE
      </h1>
      <p className="text-stone-300 font-semibold text-center py-10 text-3xl">
        ( <span className="text-orange-500">YESSS</span>{" "}
        <span className="text-orange-400">QUEEN</span>{" "}
        <span className="text-stone-200">SHE</span>{" "}
        <span className="text-pink-400">IS</span>{" "}
        <span className="text-pink-500">GIVING</span>)
      </p>
      <AudioPlayer />
      <Image
        src={jessicaImage}
        alt="Image of Jessica making a blob-fish face"
        width={100}
        height={100}
        className="w-1/3 mx-auto py-10"
      />

      <div className="flex flex-row justify-evenly items-center">
        <Image
          src={Meme1}
          alt="meme1"
          width={100}
          height={100}
          className="w-[500px]"
        />
        <Image
          src={Meme2}
          alt="meme2"
          width={100}
          height={100}
          className="w-[500px] "
        />
      </div>
      <Fireworks autorun={{ speed: 3 }} />
    </div>
  );
}
