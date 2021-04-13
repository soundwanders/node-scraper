// Web Scraping for NHL Stat Leaders
// Extracting data for Stat Leaders in 6 categories, excluding 'Penalty Minutes' and 'Major Penalties' categories
// Goals, Assists, Points, Goalie Wins, Goals Against Average (GAA) and Save Percentage

const axios = require('axios');
const cheerio = require('cheerio');
const url = 'https://www.cbssports.com/nhl/stats/';

axios(url)
  .then(response => {
    const html = response.data;
    const $ = cheerio.load(html);

    const statsTables = $(this).find('.StatsTablesContainer > .StatsTables');
    let leaders = [];

    statsTables.each(function () {
    const scoringLeader = $(this).find('div.StatsTables:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1)').text();
    const assistsLeader = $(this).find('div.StatsTables:nth-child(2)').text();
    const pointsLeader = $(this).find('div.StatsTables:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3)').text();
    const goalieWinsLeader = $(this).find('div.StatsTables:nth-child(4)').text();
    const goalsAgainstLeader = $(this).find('div.StatsTables:nth-child(5)').text();
    const savePercentLeader = $(this).find('div.StatsTables:nth-child(6)').text();

    leaders.push = ({
      Goals: scoringLeader ,
      Assists: assistsLeader ,
      Points: pointsLeader ,
      GoalieWins: goalieWinsLeader ,
      GAA: goalsAgainstLeader ,
      SavePercentage: savePercentLeader ,
    })
  })
  console.log(leaders);
  })
    .catch(console.error);