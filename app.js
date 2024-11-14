const path = require("node:path");
const assetsPath = path.join(__dirname, "public");
const browserSync = require("browser-sync");

const indexRouter = require("./routes/indexRouter");
const itemPageRouter = require("./routes/itemPageRouter");
const searchRouter = require("./routes/searchRouter");
const categoryListRouter = require("./routes/categoryListRouter");

const express = require("express");
const app = express();
const PORT = 8080;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(express.static(assetsPath));

app.use("/item", itemPageRouter);
app.use("/search", searchRouter);
app.use("/category", categoryListRouter);
app.use("/", indexRouter);

app.listen(PORT, () => console.log(`listening at localhost:${PORT}`));

browserSync.init({
  proxy: `localhost:${PORT}`, // Local server URL
  files: ["views/**/*.ejs", "public/**/*.*"], // Paths to watch
  port: PORT + 1, // Proxy port
  open: false, // Don't open new tab on JS change
  injectChanges: true,
  notify: false, // Don't show BrowserSync notifications
});
