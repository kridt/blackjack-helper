import React from "react";

export default function PlayingCard({ cardValue, cardImg }) {
  var value = cardImg;
  function createMarkup() {
    return { __html: cardImg };
  }

  return (
    <div
      style={{
        backgroundColor: "white",
        height: "190px",
        width: "120px",
        borderRadius: "12px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          lineHeight: "0.2",
          textAlign: "left",
          marginLeft: "10px",
          flex: "1",
        }}
      >
        <p>{cardValue}</p>
        <span dangerouslySetInnerHTML={createMarkup()} />
      </div>
      <div
        style={{
          flex: "1",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <span
          style={{
            fontSize: "3.5em",
            justifyContent: "center",
            alignItems: "center",
          }}
          dangerouslySetInnerHTML={createMarkup()}
        />
      </div>
      <div
        style={{
          lineHeight: "0.2",
          textAlign: "right",
          flex: "1",
          marginRight: "10px",
        }}
      >
        <p style={{ marginRight: "2.5px" }}>{cardValue}</p>
        <span dangerouslySetInnerHTML={createMarkup()} />
      </div>
    </div>
  );
}
