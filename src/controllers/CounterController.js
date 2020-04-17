let counter = 0;

const CounterController = {
    get(req, res) {
        counter++;
        return res.json({ counter: counter });
    }
}

module.exports = CounterController;