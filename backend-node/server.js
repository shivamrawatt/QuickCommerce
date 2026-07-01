require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// app.use("/", require("./routes"));
console.log("hello shivam, how are you doing today!!")
console.log("hello shivam, how are you doing today what about the learning ci/cd")
console.log("congratulations your ci/cd is working great ")
console.log("docker bhai khush hua  test 2")

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});