import express from "express";

const PORT = process.env.PORT || 3333;

const server = express();

server.get("/ping", (req, res) => {
  return res.send("pong");
})

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}.`);
});
