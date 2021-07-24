const express = require('express')
const app = express()
const port = 3000




var path = require("path");

app.use(express.urlencoded({ extended: true}))
app.use(express.json());

require("./routes/apiRoutes.js")(app)


  app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "public/reserve.html"));
  });

  app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "public/tables.html"));
  });


  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "public/index.html"));
  });

app.listen(port, () => {
  console.log(`Hot restaurant app listening at http://localhost:${port}`)
})