// Endangered Species web scraping with axios, cheerio
// not working yet

const axios = require('axios');
const cheerio = require('cheerio');
const url = 'https://www.worldwildlife.org/species/directory?direction=desc&sort=extinction_status';

// Create array gameData to hold scraped content
const animalData = [];

const name = new Set();
const scientific = new Set();
const conservation = new Set();

const fetchData = async () => {
  const result = await axios.get(url);
  return cheerio.load(result.data);
};

const scrapeData = async () => {
  const $ = await fetchData();
  $('tr > .keep').each((index, element) => {
    name.add($(element).text());
  })

  $('tr > td > em').each((index, element) => {
    scientific.add($(element).text());
  })

  $('tr > td:nth-child(3)').each((index, element) => {
    conservation.add($(element).text());
  })
};

animalData.push({
  commonName: name,
  scientificName: scientific,
  conservationStatus: conservation
});

console.log('Scraped data');
console.log(animalData);

module.exports = scrapeData;
