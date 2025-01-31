"use client";

import { useEffect, useState } from "react";
import Howl from "react-howler";

export default function JessicaPage() {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="flex justify-center">
      <Howl src="/nissan-altima.mp3" playing={isPlaying} volume={0.5} />
      <button className="text-4xl mx-auto" onClick={togglePlay}>
        {isPlaying ? "⏸ Pause" : "▶️ Play"}
      </button>
    </div>
  );
}
