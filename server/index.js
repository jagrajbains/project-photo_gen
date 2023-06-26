import express from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';
import connectDB from './mongodb/connect.js';
import postRoutes from './routes/postRoutes.js';
import photoGenRoutes from './routes/photoGenRoutes.js';

// Initializing env variables
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use('/api/v1/post', postRoutes);
app.use('/api/v1/photogen', photoGenRoutes);

app.get('/', (req, res) => {
  res.send("Hello from Photo Gen")
});

const PORT = process.env.PORT || 8080;
const startServer = async () => {
  try {
    connectDB(process.env.MONGODB_URL);
    app.listen(PORT, (err) => {
      if (err) {
        console.log("Error while starting server!", err);
      } else {
        console.log(`Server running on port: ${PORT}`)
      }
    })
  } catch (error) {
    console.log("Error while starting the app: ", err);
  }
  
}

startServer();