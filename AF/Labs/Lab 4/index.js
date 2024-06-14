const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/api/user", (req, res) => {
  const users = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Doe" },
  ];
  res.send(users);
});
app.post("/api/user", (req, res) => {
  const { name } = req.body;
  const user = { id: 3, name };
  res.send(user);
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
