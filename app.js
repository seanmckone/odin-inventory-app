const path = require("node:path");
const assetsPath = path.join(__dirname, "public");

const indexRouter = require('./routes/indexRouter');

const express = require('express');
const app = express();

const PORT = 8080;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(express.static(assetsPath));

app.use('/', indexRouter);

app.listen(PORT, () => console.log(`listening at localhost:${PORT}`));