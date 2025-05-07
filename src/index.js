const express = require("express");
const app = express();
const morgan = require("morgan");
const cors = require("cors");

//Settings
app.set("port", process.env.PORT || 3306);
app.set("json spaces", 2);

//Middleware
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

//Routes
app.use(require("./routes/index"));
app.use("api/MySQL", require("./routes/MySQL"));

//Starting the server
app.listen(app.get("port"), () => {
  console.log(`Server listening on port ${app.get("port")}`);
});
