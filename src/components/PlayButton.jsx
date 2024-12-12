import Button from "./Button";
import { useState } from "react";

function PlayButton({ movieName }) {
  const [isPlaying, setIsPlaying] = useState(false);

  function handlePlayClick() {
    setIsPlaying(!isPlaying);
    //alert(`playing ${movieName}`);
  }
  return (
    <Button onClick={handlePlayClick} className={isPlaying && "playing"}>
      {isPlaying ? "Stop Playing" : "Play"} "{movieName}"
    </Button>
  );
}

export default PlayButton;
