const express = require("express");

const app = express();
const cors = require("cors");
const path = require("path");

const PORT = 8080;
const mongoDB = require("./config/db");

mongoDB();

app.use(cors());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE" // Include DELETE here
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});
app.use(express.json());
// app.use("/images", express.static("images"));
app.use("/api/v1/user", require("./routes/login"));
app.use("/api/v1/user", require("./routes/user"));

app.listen(PORT, () => {
  console.log(`server is running at ${PORT}`);
});
