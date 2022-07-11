import React, { useRef, useState } from "react";

import { HiVolumeUp, HiVolumeOff } from "react-icons/hi";
import { BsFillPlayFill, BsFillPauseFill } from "react-icons/bs";
import Link from "next/link";

interface VideoPlayerProps {
  videoUrl: string;
}

const VideoPlayer = ({ videoUrl }: VideoPlayerProps) => {
  const [isHover, setIsHover] = useState(false);
  const [isPlay, setIsPlay] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const videoRef = useRef<HTMLVideoElement>(null);

  const onVideoPress = () => {
    if (isPlay) {
      videoRef?.current?.pause();
      setIsPlay(false);
    } else {
      videoRef?.current?.play();
      setIsPlay(true);
    }
  };

  const onMouseEnter = () => {
    setIsHover(true);
  };

  const onMouseLeave = () => {
    setIsHover(false);
  };

  const renderedPlayingButton = isPlay ? (
    <button className="text-2xl text-black lg:text-4xl" onClick={onVideoPress}>
      <BsFillPauseFill />
    </button>
  ) : (
    <button className="text-2xl text-black lg:text-4xl" onClick={onVideoPress}>
      <BsFillPlayFill />
    </button>
  );

  const renderedVolumeButton = isMuted ? (
    <button className="text-2xl text-black lg:text-4xl">
      <HiVolumeOff onClick={() => setIsMuted(false)} />
    </button>
  ) : (
    <button className="text-2xl text-black lg:text-4xl">
      <HiVolumeUp onClick={() => setIsMuted(true)} />
    </button>
  );

  const renderedVideoButtons = isHover && (
    <div className="absolute bottom-6 cursor-pointer left-8 md:left-16 lg:left-4 flex gap-10 lg:justify-between w-[100px] md:w-[50px] p-3">
      {renderedPlayingButton} {renderedVolumeButton}
    </div>
  );

  return (
    <div className="relative mt-3">
      <div
        className="rounded-3xl flex"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <Link href="/">
          <video
            muted={isMuted}
            ref={videoRef}
            className="lg:w-[750px] h-[400px] md:w-[500px] md:h-[500px] lg:h-[500px] w-[200px] rounded-2xl cursor-pointer bg-gray-100"
            src={videoUrl}
            loop
          ></video>
        </Link>

        {isHover && <div>{renderedVideoButtons}</div>}
      </div>
    </div>
  );
};

export default VideoPlayer;
