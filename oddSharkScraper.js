// Data scraping NHL Hockey game results with cheerio, puppeteer
const cheerio = require('cheerio');
const puppeteer = require('puppeteer');

const url = 'https://www.oddsshark.com/nhl/scores';

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
    const finalScores = [];

    $('a[href*="/nhl/scores"] > td > tr').each(function () {
      finalScores.push({
        score: $(this).text()
      })
    });
    console.log(finalScores);
  })
  .catch(console.error);
