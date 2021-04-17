require("dotenv").config();
const express = require("express");
const cors = require("cors");

const UserRoutes = require("./routes/UserRoutes");
const URLRoutes = require("./routes/URLRoutes");

const server = express();

server.use(cors());
server.use(express.json());

// Rotas de acesso

server.use("/", UserRoutes);
server.use("/", URLRoutes);

// Funcionalidade para craição automática de tabelas

// (async () => {
//   const database = require("./config/database");

//   try {
//     const resultado = await database.sync();
//     //console.log(resultado);
//   } catch (error) {
//     console.log(error);
//   }
// })();

server.get("/", (request, response) => {
  response.send("Hello World!");
});

server.listen(process.env.APP_PORT, () => {
  console.log("♠♠ Server ON!! ♠♠");
});
