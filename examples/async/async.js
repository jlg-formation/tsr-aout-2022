const fs = require("fs");

fs.readdir(".", function (err, files) {
  if (err) {
    console.log("err: ", err);
    return;
  }
  console.log("files: ", files);
  fs.readFile(files[0], { encoding: "utf-8" }, function (err, content) {
    if (err) {
      console.log("err: ", err);
      return;
    }
    console.log("content: ", content);
  });
});
