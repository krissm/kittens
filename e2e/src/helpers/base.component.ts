import {
  browser,
  by,
  element,
  ExpectedConditions,
  protractor,
  ElementFinder,
  ElementArrayFinder,
} from 'protractor';

export class ComponentBase {
  protected componentHook: string;

  constructor(name: string) {
    this.componentHook = this.hookAttribute(name);
  }

  protected hookAttribute(name): string {
    return `[data-test-hook=${name}]`;
  }

  protected getElement(hook: string): ElementFinder {
    return element(by.css(`${this.componentHook} ${this.hookAttribute(hook)}`));
  }

  protected getSubElements(parentHook: string, subHook: string): ElementArrayFinder {
    return element.all(by.css(`${this.componentHook} ${this.hookAttribute(parentHook)} ${this.hookAttribute(subHook)}`));
  }

  protected getElements(hook: string): ElementArrayFinder {
    return element.all(by.css(`${this.componentHook} ${this.hookAttribute(hook)}`));
  }

  rootElement() {
    return element(by.css(this.componentHook));
  }

  // WAIT UNTIL
  async waitUntilInvisible(el = this.rootElement(), time = 5000) {
    return browser.wait(
      ExpectedConditions.invisibilityOf(el),
      time,
      'Element is taking too long to appear in the DOM',
    );
  }

  async waitUntilPresent(el = this.rootElement(), time = 5000) {
    return browser.wait(
      ExpectedConditions.presenceOf(el),
      time,
      'Element is taking too long to appear in the DOM',
    );
  }

  async waitUntilNotPresent(el = this.rootElement(), time = 5000) {
    return browser.wait(
      ExpectedConditions.not(ExpectedConditions.presenceOf(el)),
      time,
      'Element ',
    );
  }

  async waitUntilVisible(el = this.rootElement(), time = 5000) {
    return browser.wait(
      ExpectedConditions.visibilityOf(el),
      time,
      'Element is taking too long to appear in the DOM',
    );
  }

  // INPUTS
  private getInputElement(inputHook: string): ElementFinder {
    return element(
      by.css(`${this.componentHook} ${this.hookAttribute(inputHook)}`),
    );
  }

  protected async pressEnterKey(inputHook: string): Promise<void> {
    return this.getInputElement(inputHook).sendKeys(protractor.Key.ENTER);
  }

  protected async enterInputText(
    inputHook: string,
    text: string,
  ): Promise<void> {
    return this.getInputElement(inputHook).sendKeys(text);
  }

  protected async clearInput(inputHook: string): Promise<void> {
    return this.getInputElement(inputHook).clear();
  }

  protected async getInputText(inputHook: string): Promise<string> {
    return this.getInputElement(inputHook).getAttribute('value');
  }

  // SELECT
  async selectOption(selectHook: string, option: string): Promise<any> {
    // return this.getElement(selectHook).element(by.cssContainingText('option', option)).click();
    // return this.getElement(selectHook).element(by.cssContainingText('[data-test-hook="class-option"]', option)).click();
    return element(by.cssContainingText('[data-test-hook="class-option"]', option)).click();
  }
  // element(by.cssContainingText('option', 'BeaverBox Testing')).click();

}

// var SelectWrapper = function(selector) {
//   this.webElement = element(selector);
// };
// SelectWrapper.prototype.getOptions = function() {
//   return this.webElement.all(by.tagName('option'));
// };
// SelectWrapper.prototype.getSelectedOptions = function() {
//   return this.webElement.all(by.css('option[selected="selected"]'));
// };
// SelectWrapper.prototype.selectByValue = function(value) {
//   return this.webElement.all(by.css('option[value="' + value + '"]')).click();
// };
// SelectWrapper.prototype.selectByPartialText = function(text) {
//   return this.webElement.all(by.cssContainingText('option', text)).click();
// };
// SelectWrapper.prototype.selectByText = function(text) {
//   return this.webElement.all(by.xpath('option[.="' + text + '"]')).click();
// };
