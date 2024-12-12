import React from "react";
import Button from "./Button";
import AlertButton from "./AlertButton";
import PlayButton from "./PlayButton";

function Toolbar({ onPlayMovie, onUploadImage }) {
  // i know that button is acessing the children, which means
  //there needs to be an opening and closing tag
  //
  return (
    <div>
      <Button onClick={onPlayMovie}>Play Movie</Button>
      <Button onClick={onUploadImage}>Upload Image</Button>
      <br />
      <PlayButton movieName="Night Before Christmas" />
      <PlayButton movieName="Spirited Away" />
      <PlayButton movieName="King Julian" />
      <PlayButton movieName="The gods must be crazy" />

      <AlertButton message={"playing"}> Play Movie</AlertButton>

      <AlertButton message={"Uploading"}> Upload Image</AlertButton>
      <br />
    </div>
  );
}
export default Toolbar;
