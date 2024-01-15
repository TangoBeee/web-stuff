const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const morgan = require("morgan");

const dbConnect = require("./database/init");
const router = require("./router/route");

const app = express();
dotenv.config();

app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));
app.disable("x-powered-by");

/* Demo GET request */
app.get("/", (req, res, next) => {
  res.status(200).json({
    demo: "send",
  });
});

/* API Routes */
app.use("/api", router);

/* Start the server only when we have a valid db connection */
dbConnect()
  .then(() => {
    try {
      app.listen(process.env.PORT, () =>
        console.log(`Server connected to ${process.env.PORT}`)
      );
    } catch (error) {
      console.log(error.message);
    }
  })
  .catch((error) => {
    console.log(error.message);
  });
