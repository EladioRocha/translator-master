const querySelector = require('cheerio');
const rp = require('request-promise');
const puppeteer = require('puppeteer');
module.exports = {
    index: (req, res) => {
        res.render('index')
    },
    translate: (req, res) => {
        if(req.params.text === ''){
            req.params.text = 'Hola mundo'
        }
        const url = `https://translate.google.com.mx/?hl=es#view=home&op=translate&sl=es&tl=en&text=${req.params.text}`;
        console.log(url);
        (async () => {
            const browser = await puppeteer.launch({headless: true});
            const page = await browser.newPage();
            await page.goto(url);
            await page.waitForSelector('.translation > span');
            const element = await page.$('.translation > span');
            const text = await page.evaluate(element => element.textContent, element);
            await browser.close();
            res.json({text})
        })();
    }
}