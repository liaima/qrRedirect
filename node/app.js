import express from 'express';
import router from './routes/router.js';

const app = express();

app.use(express.json());
app.set('etag', false)
app.use((req, res, next) => {
  res.set('Cache-Control', 'no-store')
  next()
})

app.use(router);

export default app;
