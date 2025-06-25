import { memo, useState } from "react";
// import dynamic from "next/dynamic";
import VolumeOffIcon from "@/assets/icons/volume_off.svg";
import VolumeUpIcon from "@/assets/icons/volume_up.svg";
import ArrowBackIcon from "@/assets/icons/arrow_back.svg";

const MemoizedVolumeOffIcon = memo(VolumeOffIcon);
const MemoizedVolumeUpIcon = memo(VolumeUpIcon);

// const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

interface PlayerProps {
  isVisible: boolean;
}

const Player: React.FC<PlayerProps> = ({ isVisible }) => {
  const [isMuted, setIsMuted] = useState(true);
  const [isPlayerOpen, setIsPlayerOpen] = useState(false);

  const toggleMute = () => {
    setIsMuted((prev) => !prev);
  };

  const togglePlayer = () => {
    setIsPlayerOpen((prev) => !prev);
  };

  return (
    <div className={`fixed bottom-5 ${isVisible ? "left-0" : "left-[-100%]"}`}>
      <div
        className={`flex justify-between px-2
${isPlayerOpen ? "" : "flex-col"}
`}
      >
        <button
          className="p-2"
          onClick={togglePlayer}
          aria-label={isPlayerOpen ? "플레이어 숨기기" : "플레이어 펼치기"}
        >
          <ArrowBackIcon className={isPlayerOpen ? "" : "rotate-180"} />
        </button>
        <button
          className="p-2"
          onClick={toggleMute}
          aria-label={isMuted ? "음소거 해제" : "음소거"}
        >
          {isMuted ? <MemoizedVolumeOffIcon /> : <MemoizedVolumeUpIcon />}
        </button>
      </div>

      <div className={isPlayerOpen ? "" : "hidden"}>
        {/* <ReactPlayer
          url="https://www.youtube.com/watch?v=KvMY1uzSC1E" // * Cyberpunk: Edgerunners | “I Really Want to Stay At Your House” by Rosa Walton | Music Video
          playing
          loop
          controls={false}
          width="100%"
          height="100%"
          muted={isMuted}
        /> */}
      </div>
    </div>
  );
};

export default Player;
