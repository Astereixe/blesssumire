const http = require('http');

const host = 'localhost';
const port = 8000;
const requestListener = function (req, res) {
  res.writeHead(200);
  const header = res._header;
  res.end(JSON.stringify(header));
};
const server = http.createServer(requestListener);
server.listen(port, host, () => {
  console.log(`Running at http://${host}:${port}`);
});
