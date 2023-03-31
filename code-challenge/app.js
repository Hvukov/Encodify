const express = require("express")
const cors = require("cors")
const app = express()
const port = 3000

const login = require("./login")
const encoder = require("./encoder")

app.use(express.json())

const corsOptions = {
  origin: "http://localhost:4200",
}

app.use(cors(corsOptions))

app.post("/login", login)
app.post("/encoder", encoder)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
