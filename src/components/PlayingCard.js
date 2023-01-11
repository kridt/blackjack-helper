import axios from "axios";
import React, { useEffect } from "react";

export default function PlayingCard({ cardValue, cardImg }) {
  var value = cardImg;

  return (
    <div>
      <h1>This is a playingCard</h1>
      <p>{cardValue}</p>
    </div>
  );
}
