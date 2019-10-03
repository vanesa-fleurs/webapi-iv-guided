const server = require('./api/server.js');

const port = 1500;
//const port = process.env.PORT || 1500;

server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});
