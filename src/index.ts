import Koa = require('koa');

const app = new Koa();

app.use((context): void => {
  if (context.path === '/health/ping') {
    context.body = {
      message: 'ok',
    };
  }
});

const port = 8080;
app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}/`);
});
