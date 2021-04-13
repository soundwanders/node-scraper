// web scraper Minnesota High School State Hockey Championships 1945 - present

const axios = require('axios');
const cheerio = require('cheerio');
const url = 'https://www.mnhockeyhub.com/page/show/358710-state-champions';

axios(url)
  .then(response => {
    const html = response.data;
    const $ = cheerio.load(html);

    const championsList = $('#table_76473_41d02cba-c908-4ed1-9416-20286caac69c > tbody > tr');

    // Create array gameData to hold scraped content
    const gameData = [];

    // Loop through table body and extract each row's data
    championsList.each(function () {
      const year = $(this).find('tr > td:nth-child(1)').text();
      const winner = $(this).find('tr > td:nth-child(2)').text();
      const runnerUp = $(this).find('tr > td:nth-child(3)').text();
      const score = $(this).find('tr > td:nth-child(4)').text();
      const bronze = $(this).find('tr > td:nth-child(5)').text();

      gameData.push({
        Season: year,
        Champions: winner,
        RunnerUp: runnerUp,
        FinalScore: score,
        ThirdPlace: bronze
      })
    });
    console.log('scraped data');
    console.log(gameData);
  })
  .catch(console.error);