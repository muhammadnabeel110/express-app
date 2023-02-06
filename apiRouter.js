const express = require('express');
const api = express.Router();
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://user:user123@cluster0.ypxr2bh.mongodb.net/?retryWrites=true&w=majority";
//for connection string to cloud
//username : user
//password: user123
const client = new MongoClient(uri, { useNewUrlParser: true });





api.get("/lessons", async (req, res) => {
	try {
		await client.connect();
		const collection = client.db("vuejs").collection("lesson");
		const users = await collection.find({}).toArray(); //show all entries in collection
		res.send(users);
	} catch (error) {
		console.error(error);
		res.status(500).send({ message: "Error retrieving users." });
	} finally {
		await client.close();
	}
});

api.get("/users", async (req, res) => {
	try {
		await client.connect();
		const collection = client.db("vuejs").collection("users");
		const users = await collection.find({}).toArray();
		res.send(users);
	} catch (error) {
		console.error(error);
		res.status(500).send({ message: "Error retrieving users." });
	} finally {
		await client.close();
	}
});


module.exports = api;
