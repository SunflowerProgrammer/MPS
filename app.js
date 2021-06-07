const express = require("express");
const app = express();

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

app.get("/", (req,res) => {
    res.sendFile(__dirname + "/index.html");
    app.use(express.static("public"));
})


app.listen(port);