// Web Scraping for NHL Stat Leaders
// Extracting data for Stat Leaders in 6 categories, excluding 'Penalty Minutes' and 'Major Penalties' categories
// Goals, Assists, Points, Goalie Wins, Goals Against Average (GAA) and Save Percentage


/*

const axios = require('axios');
const cheerio = require('cheerio');
const url = 'https://www.cbssports.com/nhl/stats/';


axios(url)
  .then(response => {
    const html = response.data;
    const $ = cheerio.load(html);

    const statsTables = $(this).find('div.StatsTables');

    let leaderBoard = [];

    statsTables.each(function () {
    const scoringLeader = $(this).find('div.StatsTables:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1)').text();
    const assistLeader = $(this).find('div.StatsTables:nth-child(2)').text();
    const pointLeader = $(this).find('div.StatsTables:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3)').text();
    const goalieWinsLeader = $(this).find('div.StatsTables:nth-child(4)').text();
    const goalsAgainstLeader = $(this).find('div.StatsTables:nth-child(5)').text();
    const savePercentLeader = $(this).find('div.StatsTables:nth-child(6)').text();

    leaderBoard.push ({
      Goals: scoringLeader ,
      Assists: assistLeader ,
      Points: pointLeader ,
      GoalieWins: goalieWinsLeader ,
      GAA: goalsAgainstLeader ,
      SavePercentage: savePercentLeader ,
    })
  })
  console.log(leaderBoard);
  })
    .catch(console.error);

*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
 // Data scraping NHL Hockey game results with cheerio, puppeteer
const cheerio = require('cheerio');
const puppeteer = require('puppeteer');
const url = 'https://www.cbssports.com/nhl/stats/';

puppeteer
  .launch()
  .then(browser => browser.newPage())
  .then(page => {
    return page.goto(url).then(function () {
      return page.content();
    });
  })
  .then(html => {
    const $ = cheerio.load(html);
    const leaderBoard = [];

    $('a[href*="/nhl/stats"] > div > .StatsTables').each(function () {

      const scoringLeader = $(this).find('div.StatsTables:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1)').text();
      const assistLeader = $(this).find('div.StatsTables:nth-child(2)').text();
      const pointLeader = $(this).find('div.StatsTables:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3)').text();
      const goalieWinsLeader = $(this).find('div.StatsTables:nth-child(4)').text();
      const goalsAgainstLeader = $(this).find('div.StatsTables:nth-child(5)').text();
      const savePercentLeader = $(this).find('div.StatsTables:nth-child(6)').text();

        leaderBoard.push ({
          Goals: scoringLeader ,
          Assists: assistLeader ,
          Points: pointLeader ,
          GoalieWins: goalieWinsLeader ,
          GAA: goalsAgainstLeader ,
          SavePercentage: savePercentLeader ,
      })
    });
    console.log(leaderBoard);
  })
  .catch(console.error);
*/