import express from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';

// Initializing env variables
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.get('/', (req, res) => {
  res.send("Hello from Photo Gen")
});

const PORT = process.env.PORT || 8080;
const startServer = async () => {
  app.listen(PORT, (err) => {
    if (err) {
      console.log("Error while starting server!", err);
    } else {
      console.log(`Server running on port: ${PORT}`)
    }
  })
}

startServer();