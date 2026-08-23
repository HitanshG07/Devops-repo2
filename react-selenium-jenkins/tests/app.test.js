const { Builder, By, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const { expect } = require('chai');

describe('React App UI Tests', function () {
  this.timeout(20000);
  let driver;

  before(async function () {
    const options = new chrome.Options();
    options.addArguments('--headless=new');
    options.addArguments('--no-sandbox');
    options.addArguments('--disable-dev-shm-usage');
    options.addArguments('--window-size=1920,1080');

    driver = await new Builder()
      .forBrowser('chrome')
      .setChromeOptions(options)
      .build();
  });

  after(async function () {
    if (driver) {
      await driver.quit();
    }
  });

  it('should load the page and show the heading', async function () {
    await driver.get('http://localhost:3000');
    const heading = await driver.wait(
      until.elementLocated(By.css('h1')),
      10000
    );
    const text = await heading.getText();
    expect(text).to.equal('Simple React Test App');
  });

  it('should type into the textbox and display the submitted message', async function () {
    await driver.get('http://localhost:3000');

    const input = await driver.wait(
      until.elementLocated(By.css('[data-testid="text-input"]')),
      10000
    );
    await input.sendKeys('Hello Jenkins');

    const button = await driver.findElement(
      By.css('[data-testid="submit-button"]')
    );
    await button.click();

    const output = await driver.wait(
      until.elementLocated(By.css('[data-testid="output-message"]')),
      10000
    );
    await driver.wait(async () => (await output.getText()) !== '', 5000);

    const outputText = await output.getText();
    expect(outputText).to.equal('You entered: Hello Jenkins');
  });
});
