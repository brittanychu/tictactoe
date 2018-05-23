const { newGame } = require("../game");
const router = require("express").Router();
module.exports = router;

let currentGame = newGame();

router.post("/game", (req, res, next) => {
  console.log("POST GAME");
  currentGame = newGame();
  res.json(currentGame);
});

router.get("/game", (req, res, next) => {
  console.log("GET GAME");
  res.json(currentGame.getStatus());
});

router.post("/move", (req, res, next) => {
  console.log("POST MOVE");
  const cell = Number(req.body.cell);
  if (currentGame.postMove(cell)) {
    currentGame.isGameOver();
    res.json(currentGame);
  } else {
    res.status(200).send({ Error: "Cell occupied" });
  }
});
