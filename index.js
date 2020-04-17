const restify = require("restify");

const CounterController = require("./src/Controllers/CounterController");

const port = process.env.PORT || 3000;

const server = restify.createServer({
    name: "clickcounter",
    version: "1.0.0"
});

server.get("/", CounterController.get);

server.listen(port, () => {
    console.log(`Servidor iniciado no endereço: http://localhost:${port}`);
});