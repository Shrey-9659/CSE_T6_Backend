const express = require("express");
const path = require("path");
const users = require("./users.json");

const app = express();

// serverName.methodName("/route", callback function)
app.get("/", (req, res) => {
  // To send data
  res.send("I am on Home Page");
});

const aboutFileLocation = path.join(__dirname, "about.html");

app.get("/about", (req, res) => {
  // res.sendFile("/Users/shreykhandelwal/Desktop/Shoolini/Sem 2/AI_T6/Express/server_basic/about.html")
  res.sendFile(aboutFileLocation);
});

app.get("/user", (req, res) => {
  res.json({
    name: "Shrey",
    university: "Shoolini",
    profession: "Trainer",
    year: 2026,
  });
});

app.get("/api/users", (req, res) => {
  res.json(users);
});

// Dynamic Routing
app.get("/api/users/:id", (req, res) => {
  // const reqId = +(req.params.id)
  // const reqId = parseInt(req.params.id)
  const reqId = Number(req.params.id);
  // console.log(reqId)
  if (isNaN(reqId)) {
    res.json({
      success: false,
      msg: "Please enter valid user id",
    });
  } else {
    const providedUser = users.find((user) => {
      return reqId == user.id;
    });
    if (!providedUser) {
      res.json({
        success: false,
        msg: "User not found with the provided id",
      });
    } else {
      res.json(providedUser);
    }
  }
});

app.listen(3000, () => {
  console.log("Server started...");
});
