const express = require('express')
const session = require("express-session")
const bodyParser = require("body-parser")
const app = express()
const port = process.env.PORT || 3000

require("dotenv").config()

app.set("view engine", "ejs")

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(__dirname + "/public"))


app.use(session({
	secret: process.env.SECRET,
	resave: false, 
	saveUninitialized: true,
	cookie: {
		maxAge: 1000 * 60 * 60 * 24,
		sameSite: false,
		secure: false,
	},
}))

app.get("/", (req, res) => {
	if (req.session.user) {
		res.redirect("/main")
	} else {
		res.render("auth")
	}
})

app.post("/", (req, res) => {
	if (req.session.user) {
		res.redirect("./main")
		return
	}
	if (req.body.password === process.env.PASSWORD) {
		req.session.user = req.body.soda
	}
	res.redirect("/main")
})

const authenticate = (req, res, next) => {
	if (!req.session) {
		res.status(403)
		return
	}
	if (req.session.user == "justin") {
		next()
	} else {
		res.status(403)
		return
	}
}

app.get("/main", authenticate, (req, res) => {
	res.render("main/index.ejs")
})

app.listen(port, () => {
	console.log("App online on port", port)
})