const express = require("express");
const app = express();

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3001;
}

app.get("/", (req,res) => {
    res.sendFile(__dirname + "/index.html");
    app.use(express.static("public"));
})

app.get("/tindog", (req,res) => {
  res.sendFile(__dirname + "/public/projects/tindog/index.html");
  app.use(express.static("public"));
});

app.get("/drumkit", (req,res) => {
  res.sendFile(__dirname + "/public/projects/drumkit/index.html");
  app.use(express.static("public"))
});

app.listen(port, () => {
    console.log(port);
});