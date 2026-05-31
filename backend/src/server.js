import 'dotenv/config';
import app from './app.js';
import connectToMongo from './db.js';

const PORT = process.env.PORT || 3000;

async function start() {
 try {
  await connectToMongo();
  app.listen(PORT, () => {
   console.log(`Server listening on port ${PORT}`);
  });
 } catch (err) {
  console.error('Failed to start server', err);
  process.exit(1);
 }
}

start();
