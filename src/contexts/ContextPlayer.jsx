import React, { Children, useRef, useState } from "react";
import { songsData } from "../assets/myAssets";
import { createContext, useEffect } from "react";

export const MyContext = createContext();

const ContextPlayer = ({ children }) => {
  const audioRef = useRef();
  const [seekValue, setSeekValue] = useState(0);
  const [category, setCategory]=useState("All")
  const [songTrack, setSongTrack] = useState(songsData[2]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [time, setTime] = useState({
    currentTime: {
      seconds: 0,
      minutes: 0,
    },
    totalTime: {
      seconds: 0,
      minutes: 0,
    },
  });
  const [totalTime, setTotalTime] = useState({
    minutes: 1,
    seconds: 30,
  });

  const handleSeekUpdate = async (event) => {
    const newvalue=event.target.value;
    await setSeekValue(newvalue);
    audioRef.current.currentTime =
      (newvalue / 100) * audioRef.current.duration;
  };

  const play = () => {
    if (audioRef.current) {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((err) => console.error("Play error:", err));
    }
  };

  const pause = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const prev = async () => {
    await setSongTrack(
      songsData[(songTrack.id - 1 + songsData.length) % songsData.length]
    );
    audioRef.current.play();
    setIsPlaying(true);
  };

  const next = async () => {
    await setSongTrack(
      songsData[(songTrack.id + 1 + songsData.length) % songsData.length]
    );
    audioRef.current.play();
    setIsPlaying(true);
  };

  const playWithId = async (id) => {
    await setSongTrack(songsData[id]);
    await audioRef.current.play();
    await setSeekValue(0);
    setIsPlaying(true);
  };

 useEffect(() => {
  const audio = audioRef.current;

  const update = () => {
    setSeekValue((audio.currentTime / audio.duration) * 100);

    setTime({
  currentTime: {
    seconds: Math.floor(audio.currentTime % 60),
    minutes: Math.floor(audio.currentTime / 60),
  },
  totalTime: {
    seconds: Math.floor(audio.duration % 60),
    minutes: Math.floor(audio.duration / 60),
  },
});

  };

  if (audio) {
    audio.addEventListener("timeupdate", update);
  }

  return () => {
    if (audio) {
      audio.removeEventListener("timeupdate", update);
    }
  };
}, []);




  const ContextValue = {
    audioRef,
    seekValue,
    setSeekValue,
    handleSeekUpdate,
    play,
    category,
    setCategory,
    pause,
    prev,
    next,
    playWithId,
    songTrack,
    setSongTrack,
    isPlaying,
    setIsPlaying,
    time,
    totalTime,
    setTotalTime,
  };

  return (
    <>
      <MyContext.Provider value={ContextValue}>{children}</MyContext.Provider>
    </>
  );
};

export default ContextPlayer;
