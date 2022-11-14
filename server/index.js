const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())

const port = 8000 || process.env.PORT


app.get("/test", (req, res) => {
    console.log(req.url, req.method)
    res.send("TALENT PLUS")
})

app.listen(8000, () => {
    console.log("App is listening on http://localhost:" + port)
})