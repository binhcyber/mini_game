import React, { useState } from "react";
import "./buble.css";
import { randomIntFromInterval } from "../utils/randomNum";
import bgGame from "../assets/bgGame.png";

export default function RockPaperScissor() {
  const [imgGame, setImgGame] = useState("./rockpapersci/1.png");
  const [countclick, setCountClick] = useState(1);
  const [countPlay, setCountPlay] = useState(0);
  const [countWin, setCountWin] = useState(0);
  console.log(countclick);
  const [randomImg, setRandomImg] = useState({
    hinhAnh: "./rockpapersci/1.png",
    giaTri: 1,
  });
  const handlePlayGame = () => {
    const random = randomIntFromInterval(1, 3);
    console.log("random", random);
    setRandomImg({
      ...randomImg,
      hinhAnh: `./rockpapersci/${random}.png`,
    });
    setCountPlay(countPlay + 1);
    if (random === 1 && countclick === 2) {
      setCountWin(countWin + 1);
      return;
    }
    if (random === 2 && countclick === 3) {
      setCountWin(countWin + 1);
      return;
    }
    if (random === 3 && countclick === 1) {
      setCountWin(countWin + 1);
      return;
    }
  };
  return (
    <div
      style={{
        padding: "30px",
        width: "100vw",
        minHeight: "100vh",
        backgroundImage: `url(${bgGame})`,
      }}
      className="bgGame"
    >
      <div className="row fixrow">
        <div className="col-4 imgcss ">
          <div className="speech-bubble">
            <img style={{ width: "25%", height: "90%" }} src={imgGame}></img>
          </div>
          <img
            style={{ width: "70%", height: "70%" }}
            src="./rockpapersci/player.png"
          />
          <div>
            <div className="row fixedrow">
              <div
                onClick={() => {
                  setImgGame("./rockpapersci/1.png");
                  setCountClick(1);
                }}
                className="col-4 bgrps"
              >
                <img
                  onClick={() => {
                    setImgGame("./rockpapersci/1.png");
                    setCountClick(1);
                  }}
                  src={"./rockpapersci/1.png"}
                  style={{
                    width: "30%",
                    height: "80%",
                  }}
                />
              </div>
              <div
                onClick={() => {
                  setImgGame("./rockpapersci/2.png");
                  setCountClick(2);
                }}
                className="col-4 bgrps"
              >
                <img
                  onClick={() => {
                    setImgGame("./rockpapersci/2.png");
                    setCountClick(2);
                  }}
                  src={"./rockpapersci/2.png"}
                  style={{ width: "30%", height: "80%" }}
                />
              </div>
              <div
                onClick={() => {
                  setImgGame("./rockpapersci/3.png");
                  setCountClick(3);
                }}
                className="col-4 bgrps"
              >
                <img
                  onClick={() => {
                    setImgGame("./rockpapersci/3.png");
                    setCountClick(3);
                  }}
                  src={"./rockpapersci/3.png"}
                  style={{ width: "30%", height: "80%" }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="col-4">
          <h1 style={{ color: "yellow" }}>I am Iron man, i love you 3000</h1>
          <h3 style={{ color: "yellow" }}>Số bàn thắng: {countWin}</h3>
          <h3 style={{ color: "yellow" }}>Số bàn chơi: {countPlay}</h3>
          <button onClick={handlePlayGame} className="btn btn-success">
            PLAY GAME
          </button>
        </div>
        <div className="col-4 ">
          <div className="speech-bubble">
            <img
              style={{ width: "25%", height: "90%" }}
              src={randomImg.hinhAnh}
            ></img>
          </div>
          <img
            style={{ width: "70%", height: "70%" }}
            src="./rockpapersci/playerComputer.png"
          />
        </div>
      </div>
    </div>
  );
}
