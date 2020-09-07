import { browser, ExpectedConditions, promise } from 'protractor';
import { ComponentBase } from './base.component';

export class RouteBase extends ComponentBase {
  private path: string;

  constructor(componentHook: string, path: string) {
    super(componentHook);
    this.path = path;
  }

  navigateTo(url: string = this.path) {
    return browser.get(url);
  }

  getPageTitle(): promise.Promise<string> {
    return browser.getTitle();
  }

  waitUntilNavigatedTo(time = 15000) {
    return browser.wait(ExpectedConditions.urlContains(this.path), time);
  }
}
