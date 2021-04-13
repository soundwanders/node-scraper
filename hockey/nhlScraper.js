// NHL Game Results scraper with axios, cheerio

const axios = require('axios');
const cheerio = require('cheerio');
const url = 'https://www.sportsbettingdime.com/nhl/results';

axios(url)
  .then(response => {
    const html = response.data;
    const $ = cheerio.load(html);

    // get current day, split to remove UTC
    // convert date to ISO string before split to avoid Type Error
    const todaysDate = new Date().toISOString().split('T')[0];

    // get table that holds final scores
    const scoreboard = $('div.odds-content-archive__matchups:nth-child(9) > div > div > table');

    // get div that holds home and away team names
    const home = $('div.odds-content-archive__matchups:nth-child(9) > div > div:nth-child(1) > div:nth-child(1)');
    const away = $('div.odds-content-archive__matchups:nth-child(9) > div > div:nth-child(1) > div:nth-child(1)');

    // create array 'gameData' to hold the data
    const gameData = [];

    // Loop through divs to extract home team names
   home.each(function () {
      const homeTeam = $(this).find('div:nth-child(3)').text();

      if (homeTeam.length !== 0) {
        gameData.push({
          Home: homeTeam ,
        })
      }
    })
    
    // Loop through divs to  extract home away team names
    away.each(function () {
      const awayTeam = $(this).find('div:nth-child(1)').text();

      if (awayTeam.length !== 0) {
        gameData.push({
          Away: awayTeam ,
        })
      }
    })

    // Loop through table, extracting score of the games
    scoreboard.each(function () {
      const homeScore = $(this).find('table > tbody > tr:nth-child(1) > td > b').text();
      const awayScore = $(this).find('table > tbody > tr:nth-child(2) > td > b').text();
      
      if (homeScore.length !== 0 && awayScore.length!==0) {
        gameData.push({
          HomeGoals: homeScore ,
          AwayGoals: awayScore
        })
      }
    })

    const memo = 'Data collected from NHL Games played '; // intentional space before closing quote
    gameData.push(memo + todaysDate);

    // console log the array that contains all of today's game data
    console.log(gameData);
  })
  .catch(console.error);