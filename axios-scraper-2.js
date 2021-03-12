// Axios Scraper 2 using async
// not functional yet

const axios = require('axios');
const cheerio = require('cheerio');
const url = 'https://www.sportsbettingdime.com/nhl/results';

// Create array gameData to hold scraped content
const gameData = [];

const score = new Set();
const homeTeam = new Set();
const awayTeam = new Set();

const fetchData = async () => {
    const result = await axios.get(url);
    return cheerio.load(result.data);
};

const scrapeData = async () => {
    const $ = await fetchData();
    $('div > .odds-content__team-vertical-away').each((index, element)  =>  {
    homeTeam.add($(element).text())
    });

    $('div > .odds-content__team-vertical-away').each((index, element) => {
    awayTeam.add($(element).text())
    });

    $('td > b').each(() => {
    score.add($(element).text())
    });
}

gameData.push({
    home: [...homeTeam],
    away: [...awayTeam],
    total: [...score],
})

console.log("Scraped sportsbettingdime.com")
console.log(gameData);

// this is just an educational placeholder
// module export has to do w/ implementing express for server side...not there yet
module.exports = scrapeData;