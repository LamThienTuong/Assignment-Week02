const fs = require("fs");

fs.readFile("products.json", "utf8", (err, data) => {
  const content = data;
  //convert file and numberproduct
  let a = JSON.parse(data);
  nproduct = a.length;

  a.forEach(obj => {
    obj.dateUpdated = new Date();
    obj.price = obj.price.toLocaleString("en");
    //a.dateUpdated = d.;
  });

  let b = JSON.stringify(a);

  fs.writeFile("test.js", b, err => {
    if (err) {
      console.error(err);
      return;
    }
  });
  //write file

  if (err) {
    console.error(err);
    return;
  }

  console.log(`Number of products is : ${nproduct}`);
});
