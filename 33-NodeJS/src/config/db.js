const express = require("express")
const mongoose = require("mongoose")

mongoose
	.connect("mongodb+srv://mi7rtfggj:igulchin0@igulchin0.69z0c7i.mongodb.net/users?retryWrites=true&w=majority&appName=igulchin0", { useNewUrlParser: true })
	.then(console.log("connect db"))