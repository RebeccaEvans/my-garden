const express = require('express')
const axios = require('axios')
const cheerio = require('cheerio')
const fs = require('fs')

const app = express()

// Extracts list of urls for each plant in Great Plant Picks list of all plants

axios.get('https://www.greatplantpicks.org/plantlists/by_publish/yes')

	.then(function(response) {
		const $ = cheerio.load(response.data)
		const plantUrls = []
		
		$('a', '.plantname').each(function () {
			plantUrls.push($(this).attr('href'))
		})

		//console.log(plantUrls)

		const prlantUrlStr = plantUrls.toString()

		let writeStream = fs.createWriteStream('planturls.txt');

		writeStream.write(prlantUrlStr);

		writeStream.on('finish', () => {	
			console.log('wrote all data to file');
		});

		// close the stream
		writeStream.end();

	})

	.catch(function (error) {
	// handle error

	console.log(error);
	})