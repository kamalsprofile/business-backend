const express = require('express');
const app = express();
const auhtRoute = require('./routes/auth');
const mongo = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './routes/connect.env' });
// connect with DB
mongo.connect(process.env.DB_CONNECT,
    { useNewUrlParser: true },
    () => console.log("connected"));
app.use(express.json())
app.use('/api/user', auhtRoute);
app.listen(3000, () => console.log('server is up and running'))