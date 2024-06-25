const express = require('express')
const route = express.Router()

const {home,login} = require("./index")


route.use("/",home)
route.use("/login",login)


route.use("*",(req,res) => {
	res.status(404).send("Not Found")
})


module.exports = route