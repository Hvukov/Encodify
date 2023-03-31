const encoderFunction = require("./encoderFunction")

module.exports = function encoder(req, res) {
  console.log(req.body.input)
  const input = req.body.input
  const encoded = encoderFunction(input)
  console.log(encoded)
  res.send({ encoded: encoded })
}
