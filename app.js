const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const multer = require('multer')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const path = require('path')
const url = require('url')
const nocache = require("nocache");
const route = require("./route/route")


app.set('view engine','ejs')
// app.use(express.static("pulic")

app.use(bodyParser())
app.use(bodyParser.urlencoded({extended:true}))
app.use(nocache());
app.use(session({
	secret:"4%%213g@!!",
	resove:false,
	saveUninitialized:true,
	cookie:{
		// secure:"true",

	}
}))


app.use(route)

app.listen(8000,() =>{
	console.log("Listening Port 8000")
})




