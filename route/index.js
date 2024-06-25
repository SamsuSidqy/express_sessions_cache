const express = require('express')
const home = express.Router()
const login = express.Router()



const IsLoggin = (req,res,next) =>{
	if (req.session.user || req.session.authenticated) {
		next()		
	}else{
		req.session.destroy((err) => {
            res.redirect('/login');
        })
	}
}

const islogin = (req,res,next) => {
	if (req.session.user || req.session.authenticated) {
          res.redirect('/');
     		
	}else{
		next()
	}
}


home
.get("/",IsLoggin,(req,res) => {

	const data = {
		user:req.session.user,
		auth:req.session.authenticated
	}
	res.render("index",data)
})
.post("/",(req,res) => {
	req.session.destroy()
	res.redirect("/")
})

login
.get("/",islogin,(req,res) => {
	res.render("login")
})
.post("/",islogin,(req,res) => {
	const {username,password} = req.body
	if (!req.body.username || !req.body.password){
		res.send("Username & Passwor Is Required")
	}else{
		if(req.body.password  === "admin"){
			req.session.authenticated = true;
			req.session.user = {
				username,
				password,
				id:12
			}
			res.redirect("/")
		}else{
			res.send("Username & Passwor Is Invalid")
		}
	}
})




module.exports = {home, login}