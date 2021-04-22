require('dotenv').config();
jest.setTimeout(30000);

describe('Github', () => {
  beforeAll(async () => {
    await page.goto('https://github.com/');
    await page.click('body > div.position-relative.js-header-wrapper > header > div > div.d-flex.flex-justify-between.flex-items-center > div.d-flex.flex-items-center > button');
    await page.click('body > div.position-relative.js-header-wrapper > header > div > div.HeaderMenu.HeaderMenu--logged-out.position-fixed.top-0.right-0.bottom-0.height-fit.position-lg-relative.d-lg-flex.flex-justify-between.flex-items-center.flex-auto > div.d-lg-flex.flex-items-center.px-3.px-lg-0.text-center.text-lg-left > a.HeaderMenu-link.flex-shrink-0.no-underline.mr-3');
  });

  it('should not be titled "Sign in to GitHub · GitHub"', async () => {
    const { EMAIL, PASSWORD } = process.env;
    try {
      await page.type('#login_field', EMAIL, {delay: 100});
      await page.type('#password', PASSWORD, {delay: 100});

      await page.click('#login > div.auth-form-body.mt-3 > form > div > input.btn.btn-primary.btn-block');
      await page.waitForTimeout(5000);

      await expect(page.title()).resolves.not.toMatch('Sign in to GitHub · GitHub');
    } catch (error) {
      throw 'Autenticação falhou';
    }
  });
});