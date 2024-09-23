const express = require("express");

const studentRoutes = require("./routes/studentRoutes");
const swaggerSetup = require("./swagger");


const logger = require("./middleware/logger");
const rateLimiter = require("./middleware/rateLimiter");
const { connection } = require("./sql/connection");
const { adminconnection } = require("./sql/admin.connection");
const { schoolRoutes } = require("./routes/school.route");
const { adminRoutes } = require("./routes/admin.route");
const { mongoconnection } = require("./mongodb/connection");
const { loginRoute } = require("./routes/login.route");
const { registerRoute } = require("./routes/register.route");

const app = express();
swaggerSetup(app);

app.use(express.json());
app.use(logger);
app.use(rateLimiter);

app.use("/students", studentRoutes);

app.use("/schools", schoolRoutes);

app.use("/admins", adminRoutes);



app.use("/login", loginRoute);

app.listen(9000, async () => {
  console.log("Server is running on port 9000");
  await connection;
  console.log("SQL Db School Connected");
  await adminconnection;
  console.log("SQL Db Admin Connected");
  await mongoconnection;
  console.log("mongoDB Connected");
});
