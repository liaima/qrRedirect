import app from './app.js';
import db from './config/db.js';

const PORT = process.env.NODE_PORT || 8000;

const main = async () => {
  try {
    await db.authenticate();
    console.log('database conected');
    app.listen(
      PORT, 
      () => console.log(`App runing on port ${PORT}`)
    )
  } catch (err) {
    console.error("Unable to connect to the database:", err);
  }
}

main();

