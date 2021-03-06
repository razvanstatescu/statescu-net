const sitemap = require("nextjs-sitemap-generator");
const fs = require("fs");

const BUILD_ID = fs.readFileSync(".next/BUILD_ID").toString();

sitemap({
  baseUrl: "https://statescu.net",
  pagesDirectory: __dirname + `/.next/static/${BUILD_ID}/pages`,
  targetDirectory: "public/",
  //   ignoredExtensions: ["js", "map"],
  //   ignoredPaths: ["[fallback]"],
});
