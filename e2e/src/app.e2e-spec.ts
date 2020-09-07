import { AppPage } from './app.po';
import { browser, logging } from 'protractor';
import { GenderPage } from './gender.po';
import { Gender } from '../../src/app/shared/enums';

describe('workspace-project App', () => {
  const appPage = new AppPage();
  const genderPage = new GenderPage();

  const data = {
    pageTitle: 'AglKittens',
    heading: 'AGL - kittens',
    // baseUrl: 'http://localhost:4200/',
    genderPage: {
    },
  };

  beforeAll(() => {
    browser.driver
      .manage()
      .window()
      .maximize();
  });

  it('should redirectTo to default url', async () => {
    await appPage.navigateTo();
    expect(await genderPage.waitUntilNavigatedTo()).toBeTruthy();
  });

  it('should have page title', async () => {
    const text = await appPage.getPageTitle();
    expect(text).toEqual(data.pageTitle);
  });

  it('should have heading', async () => {
    const text = await appPage.getHeading();
    expect(text).toEqual(data.heading);
  });

  it('should sort kittens alphabetically', async () => {
    const kittens = await genderPage.getKittens(Gender.MALE);
    const sorted: string[] = [...kittens].sort();
    expect(kittens.length).toBeGreaterThan(1);
    expect(kittens).toEqual(sorted);
  });

  it('should sort kittens alphabetically', async () => {
    const kittens = await genderPage.getKittens(Gender.FEMALE);
    const sorted: string[] = [...kittens].sort();
    expect(kittens.length).toBeGreaterThan(1);
    expect(kittens).toEqual(sorted);
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
