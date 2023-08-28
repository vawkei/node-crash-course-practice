const fs = require("fs");

//ReadFile:
fs.readFile("./docs/blog1.txt", function (error, data) {
  if (error) {
    console.log(error);
  }

  console.log(data);
  //Terminal:<Buffer 41 6c 6c 20 49 20 64 6f 20 69 73 20 63 6f 64 65 2c 20 49 20 64 6f 6e 74 20 68 61 76 65 20 61 20 6c 69 66 65 20 6f 75 74 73 69 64 65 20 6f 66 20 69 74 ... 1 more byte>

  console.log(data.toString());
  //Terminal:All I do is code, I dont have a life outside of it.
});

// WriteFile:
fs.writeFile(
  "./docs/blog2.txt",
  "Web Development is all I think of every single day.So coding is now a habit.",
  function (error) {
    if(error){
        console.log(error)
    }
  }
);
