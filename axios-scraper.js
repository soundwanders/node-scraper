// Axios Scraper

const axios = require('axios');
const cheerio = require('cheerio');
const url = 'https://www.sportsbettingdime.com/nhl/results';

axios(url)
  .then(response => {
    const html = response.data;
    const $ = cheerio.load(html);

    // div class odds-content-archive is a container that holds entire table of data
    // div class odds-content-archive___matchup holds the separate data for each game
    // by accessing the individual matchup divs, you are able to loop through and log each games data
    const scoreboard = $('div > .odds-content-archive__matchups');

    // Create array gameData to hold scraped content
    const gameData = [];

    // Loop through table and extract team name and number of goals scored
    scoreboard.each(function () {
      const homeTeam = $(this).find('div > .odds-content__team-vertical-home').text();
      const homeScore = $(this).find('td > b').text();
      const awayTeam = $(this).find('div > .odds-content__team-vertical-away').text();
      const awayScore = $(this).find('td > b').text();

      gameData.push({
        home: homeTeam,
        away: awayTeam,
        homeTotal: homeScore,
        awayTotal: awayScore
      });
    });
    console.log(gameData);
  })
  .catch(console.error);
