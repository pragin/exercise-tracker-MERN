const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });

const connection = mongoose.connection;
connection.on("error", console.error.bind(console, "connection error: "));
connection.once("open", () =>
  console.log("MongoDB database connection established successfully")
);

//Import routes
const excerciseRouter = require("./routes/exercises");
const userRouter = require("./routes/users");

app.use("/exercises", excerciseRouter);
app.use("/users", userRouter);

app.listen(port, () => console.log(`Example app listening on port ${port}`));
