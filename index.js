const express = require("express")

const server = express()

server.use((err, req, res, next) => {
	console.log(err)
	res.status(500).json({
		message: "Something went wrong",
	})
})

server.listen(5000, () => {
	console.log('server running on port 5000')
})