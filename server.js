const http = require("http");
const _ = require("lodash");
const minimist = require("minimist");

const args = minimist(process.argv.slice(2));
const port = Number(args.port || process.env.PORT || 8080);

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ ok: true, path: req.url, id: _.uniqueId("req_") }));
  })
  .listen(port, () => console.log(`listening on ${port}`));
