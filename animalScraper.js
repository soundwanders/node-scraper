// Endangered Species web scraping with axios, cheerio
// Create array of animal common name, scientific name, conservation status

const axios = require('axios');
const cheerio = require('cheerio');
const url = 'https://www.worldwildlife.org/species/directory?direction=desc&sort=extinction_status';

axios(url)
  .then(response => {
    const html = response.data;
    const $ = cheerio.load(html);

    // web page table body contains three table headers (scope = cols)
    // each table row contains 3 td, common name, scientific name, and conservation status
    const speciesList = $('tbody > tr');

    // gameData array will hold all of the scraped data
    const animalData = [];

    // Loop through table to extract species data
    speciesList.each(function () {
      const name = $(this).find('tr > .keep').text();
      const scientific = $(this).find('tr > td > em').text();
      const conservation = ($(this).find('tr > td:nth-child(3)').text());

      animalData.push({
        commonName: name,
        scientificName: scientific,
        conservationStatus: conservation
      })
    });
    console.log('Scraped');
    console.log(animalData);
  })
  .catch(console.error);
