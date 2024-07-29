import express from "express";
const app = express();
const port = 3000;

app.get("/", (_, res) => {
  res.send("<h1>Hello</h1>");
});

app.get("/about", (_, res) => {
  res.send("<h1>About Me</h1><p>My name is Angela</p>");
});

app.get("/contact", (_, res) => {
  res.send("<h1>Contact Me</h1><p>Phone: +44123456789</p>");
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
