import puppeteer from 'puppeteer';
import { browseConfig } from './constants/browseConfig.js'; 
import { getDataFromPage } from  './utils/getDataFromPage.js';


const URL = "https://developers.vtex.com/vtex-developer-docs/docs/vtex-store-components-image";

(async () => {
  const browser = await puppeteer.launch(browseConfig);
  const page = await browser.newPage();
  await page.goto(URL);
  await page.waitForSelector("#content");
  await page.evaluate(getDataFromPage);

  
})();