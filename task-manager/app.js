const express = require("express");
const app = express();

const PORT = 3000;

//Routes
app.get("/hello", (req, res) => {
  res.send("Task manager app");
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
