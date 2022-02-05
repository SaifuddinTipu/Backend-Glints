const mongoose = require("mongoose");
const http = require("http");
const appExpress = require("./appExpress");
const expressRoutes = require("./expressRoutes");

const normalizePort = (val) => {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    return val;
  }

  if (port >= 0) {
    return port;
  }

  return false;
};

const onError = (error) => {
  if (error.syscall !== "listen") {
    throw error;
  }
  const bind = typeof addr === "string" ? "pipe" + addr : "port" + port;
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;
    default:
      throw error;
  }
};

expressRoutes(appExpress)

const onListening = () => {
  const addr = server.address();
  const bind = typeof addr === "string" ? "pipe " + addr : "port " + port;
  console.log("Listening on" + bind);
};

const port = normalizePort(process.env.APP_PORT || "3000");

const server = http.createServer(appExpress);


mongoose
  .connect(
    `${process.env.MONGODB_URL}`,
    {
      useNewUrlParser:true,
      useUnifiedTopology: true
    }
  )
  .then(() => {
    console.log("Connected to database!");
  })
  .catch((err) => {
    console.log("Connection failed!", err);
  });



server.on("error", onError);
server.on("listening", onListening);
server.listen(port);



