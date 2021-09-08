const express = require("express");
const path = require("path");
const hbs = require("hbs");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 8800;

// publicPath
const staticPath = path.join(__dirname, "../Public");
const templatePath = path.join(__dirname, "../templates/views");
const partialPath = path.join(__dirname, "../templates/partials");

app.set("view engine", "hbs");

app.set("views", templatePath);
hbs.registerPartials(partialPath);
app.use(express.static(staticPath));
app.use(
  cors({
    origin: "*",
  })
);

app.get("", (req, res) => {
  res.render("index.hbs");
});

app.get("/vaccine", (req, res) => {
  res.render("vaccine.hbs");
});
app.get("/district", (req, res) => {
  res.render("district.hbs");
});
app.get("*", (req, res) => {
  res.render("404error", {
    errorMsg: "OOps! Page not Found !",
  });
});
app.listen(port, () => {
  console.log(`listning to ${port}`);
});
