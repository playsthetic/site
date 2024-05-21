const nunjucks = require("nunjucks");
const fs = require("fs");

nunjucks.configure("./src", { autoescape: true });

const html = nunjucks.render("index.html", {});

fs.writeFileSync("./build/index.html", html);
