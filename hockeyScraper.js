// web scraper Minnesota High School State Hockey Championships 1945 - present

const axios = require('axios');
const cheerio = require('cheerio');
const url = 'https://www.mnhockeyhub.com/page/show/358710-state-champions';

axios(url)
  .then(response => {
    const html = response.data;
    const $ = cheerio.load(html);

    // div class odds-content-archive is a container that holds entire table of data
    // div class odds-content-archive___matchup holds the separate data for each game
    // by accessing the individual matchup divs, you are able to loop through and log each games data
    const championsList = $('#table_76473_41d02cba-c908-4ed1-9416-20286caac69c > tbody');

    // Create array gameData to hold scraped content
    const gameData = [];

    // Loop through table and extract team name and number of goals scored
    championsList.each(function () {
      const year = $(this).find('tr > td:nth-child(1)').text();
      const champs = $(this).find('tr > td:nth-child(2)').text();
      const runnerUp = $(this).find('tr > td:nth-child(3)').text();
      const score = $(this).find('tr > td:nth-child(4)').text();
      const bronze = $(this).find('tr > td:nth-child(5)').text();

      gameData.push({
        Season: year,
        Champions: champs,
        RunnerUp: runnerUp,
        FinalScore: score,
        ThirdPlace: bronze
      });
    });
    console.log('scraped data');
    console.log(gameData);
  })
  .catch(console.error);
