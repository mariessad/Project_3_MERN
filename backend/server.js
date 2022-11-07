const path = require("path");

const express = require("express");

const morgan = require("morgan");

const favicon = require("serve-favicon");

const dotenv = require("dotenv");

const mongoose = require("mongoose");

// import user router
const userRouter = require("./routes/api/users");

// connect to config file
dotenv.config();

// database
const DB = mongoose
  .connect(
    process.env.DATABASE.replace("<PASSWORD>", process.env.DATABASE_PASSWORD),
    {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("DB CONNECTION SUCCESSFUL!");
  });

//   express
const app = express();

app.use(morgan("dev"));

app.use(express.json());

app.use("/api/users", userRouter);

app.all("*", (request, response) => {
  response.send("undefined route");
});

// port
const port = 5000;

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})
