const express = require("express");
const mongoose = require("mongoose");
const authRoute = require('./routes/auth.js');
const userRoute = require('./routes/users.js');
const productRoute = require('./routes/products.js'); 
const cartRoute = require('./routes/cart.js')
const PORT = process.env.PORT || 5000;
require("dotenv/config");

const app = express();


mongoose.connect(process.env.MONGO_DB_URL, { useNewUrlParser: true }, () => {
      console.log("Mongo DB connected successfully!")
})

app.use(express.json());


//ALL API Route Goes here
app.use("/api/auth",authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("api/cart", cartRoute);

app.listen(PORT,() => {
    console.log(`Server running on PORT ${PORT}`);
})