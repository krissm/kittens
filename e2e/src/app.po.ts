import { browser } from 'protractor';
import { RouteBase } from './helpers/base.route';

export class AppPage extends RouteBase {
  heading = 'app-heading';

  constructor() {
    super('app-root', '/');
  }
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getHeading(): Promise<string> {
    return this.getElement(this.heading).getText() as Promise<string>;
  }
}
