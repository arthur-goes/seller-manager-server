const express = require('express');
const axios = require('axios');
const dotenv = require('dotenv').config('./.env');
const AmazonSellerAuth = require('./seller-api/amazonSellerAuth');

const amazonSellerAuth = new AmazonSellerAuth();
const app = express();

app.use(express.json());

app.get("/", async (req, res) => {
    let accessToken = await amazonSellerAuth.getAccessToken()
    res.send("Token obtido com sucesso!")
})

const PORT = 3000;
app.listen(PORT, () => console.log('Server is running on port ' + PORT));