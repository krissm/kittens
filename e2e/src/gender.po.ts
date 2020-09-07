import { browser, by, element, promise } from 'protractor';
import { RouteBase } from './helpers/base.route';

export class GenderPage extends RouteBase {
  genderCardHook = 'gender-card-';
  cardTitleHook = 'card-title';
  kittensListHook = 'kittens';

  constructor() {
    super('gender-page', '/gender');
  }
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  async getKittens(personGender): Promise<any> {
    const items = this.getSubElements(this.genderCardHook + personGender, this.kittensListHook);
    return items.map(item => item.getText());
  }

}
