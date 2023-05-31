const express = require("express");
const placesRouter = require('./routers/places.routes')

const PORT = process.env.PORT || 8080;

const app = express();
const cors = require('cors');

app.use(express.json())

app.use('/api',cors(), placesRouter)

app.listen(PORT, () => console.log(`server strated on port ${PORT}`));
