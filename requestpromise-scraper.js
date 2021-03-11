const rp = require('request-promise');
const $ = require('cheerio');
const siteUrl = 'https://www.oddsshark.com/nhl/scores';

rp(siteUrl)
  .then(function (html) {
    // successfully scraped page
    console.log($('.home > td', html).length);
    console.log($('.away > td', html));
  })
  // handle any caught errors
  .catch(function (err) {
  });
