// Web Scraping with axios , cheerio

const axios = require('axios');
const cheerio = require('cheerio');
const url = 'https://www.worldwildlife.org/species/directory?direction=desc&sort=extinction_status';


axios(url)
  .then(response => {
    const html = response.data;
    const $ = cheerio.load(html);

    // table body contains three table headers (scope = cols)
    // each table row contains 3 td, common name, scientific name, and conservation status
    // table rows have classes of 'odd' / 'even'
    const speciesList = $('tbody > tr');

    // Create array gameData to hold scraped content
    const animalData = [];

    // Loop through table and extract team name and number of goals scored
    speciesList.each(function () {
        const name = $(this).find('tr > .keep').text();
        const scientific = $(this).find('tr > td > em').text();
        const conservation = ($(this).find('tr > td:nth-child(3)').text());

        animalData.push ({
            commonName: name ,
            scientificName: scientific ,
            conservationStatus: conservation ,
        })
    });
    console.log("Scraped")
    console.log(animalData);
  })
  .catch(console.error);