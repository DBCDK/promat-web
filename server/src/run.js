"use strict"
const express = require('express')
const cors = require('cors')
const request = require('request')

const app = express();
app.use(cors())
const port = 3002;

// app.get("/cases/", async (req, res) => {
//   res.send({ data: await genMock("cases") });
// });
// app.get("/reviewers", async (req, res) => {
//   res.send({ data: await genMock("reviewers") });
// });
// app.get("/content-types", (req, res) => {
//   res.send({ data: "hello world" });
// });
app.get("/opensearch", async (req, res) => {

  const query = req.query
  const results = await opensearch(query.id)
  if (results) {
    res.send({ data: results });
  }
  else {
    res.statusCode = 404
    res.end()
  }
});


app.get("/reviewers", async (req,res) => {
  request.get("http://promat-service.metascrum-staging.svc.cloud.dbc.dk/v1/api/reviewers").pipe(res)
})
app.get("/options/subjects", async (req,res) => {
  request.get("http://promat-service.metascrum-staging.svc.cloud.dbc.dk/v1/api/subjects").pipe(res)
})

app.listen(port, () => {
  console.log("Server has been started");
});
