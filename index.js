const express = require("express");
const bodyParser = require("body-parser");

const userRoute = require("./routes/userRoute");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
const port = 3000;

userRoute(app);

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () => console.log("App running on port 3000"));
