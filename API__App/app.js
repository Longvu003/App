// Requiring module
const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const { MongoClient } = require("mongodb");
const ProductRoute = require("./Routes/ProductRoutes");
const CategoryRoute = require("./Routes/CategoryRoute");
const UserRoute = require("./Routes/UserRoute");
const mongoose = require("mongoose");
const cors = require("cors");
// Creating express object
const app = express();
app.use(express.static("Views/"));
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.json());
app.use(cors({ origin: "*" }));

app.use("/products", ProductRoute);
app.use("/Categories", CategoryRoute);
app.use("/Users", UserRoute);
const uri =
  "mongodb+srv://hailongvu552:121004@cluster0.0p1ed.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("MongoDB Connection Error:", err));
// Handling GET request
app.get("/", (req, res) => {
  res.send("A simple Node App is " + "running on this server");
  res.end();
});

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // res.locals.message = err.message;
  // res.locals.error = req.app.get("env") === "development" ? err : {};

  // res.status(err.status || 500);
  // res.render("error");
  res.status(err.status || 500);
  res.json({ message: err.message });
});

const PORT = process.env.PORT || 7979;
app.set("view engine", "ejs");
// Server Setup
app.listen(PORT, console.log(`Server started on port ${PORT}`));
