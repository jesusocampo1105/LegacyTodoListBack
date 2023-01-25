const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const PORT = 3030;
const app = express();

const todoRoutes = require("./routes/todoRoutes");
const connectionOptions ={ useUnifiedTopology: true,
    useNewUrlParser: true, useFindAndModify: false};

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://oscar:1234@legacytodolist.sgqnvzf.mongodb.net/?retryWrites=true&w=majority").then(() => console.log("Connected successfully")).catch((err) => console.error(err));

app.use("/", todoRoutes);

app.listen(PORT, () => {
    console.log("The server is listening on port " + PORT);
});