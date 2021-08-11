const { app, port } = require('./api/server');

app.listen(port, () => {
  process.stdout.write(`App listening at http://localhost:${port}\n`);
});
