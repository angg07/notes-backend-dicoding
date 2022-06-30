/* eslint-disable linebreak-style */
const Hapi = require("@hapi/hapi");
const routes = require("./routes");

const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: "localhost",
    routes: {
      cors: {
        origin: ["*"], // an array of origins or 'ignore'
        headers: ["Accept", "Authorization", "Content-Type", "If-None-Match", "Accept-language"], // all default apart from Accept-language
        additionalHeaders: ["cache-control", "x-requested-with", "Access-Control-Allow-Origin", "Access-Control-Allow-Private-Network"],
      },
    },
  });

  server.route(routes);

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
