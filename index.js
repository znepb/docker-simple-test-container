const fastify = require("fastify");
const { readdirSync } = require("fs");
const app = fastify();

app.get("/", (req, res) => {
  console.log("Received request");
  res.send({
    message: "Hello World",
    env: process.env,
    list: readdirSync(process.env.DATA_PATH || ".").map((file) => {
      return file;
    }),
  });
});

app.listen({ port: 2000, host: "0.0.0.0" }).then(() => {
  console.log("Server is running on port 2000");
});
