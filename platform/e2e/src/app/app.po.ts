import { browser, by, element } from 'protractor';

export class AppPage {
  MENU_TITLE: string = 'Microfrontend Not Found';

  async navigateToHomePage(): Promise<unknown> {
    return browser.get(browser.baseUrl);
  }

  async getCurrentURL(): Promise<string> {
    return browser.getCurrentUrl();
  }

  async containerTitleText(): Promise<string> {
    return element(by.css('h1')).getText();
  }

   menuButton() {
    return element(by.cssContainingText('.app-name', 'Menu'));
   }
  
   checkoutButton() {
    return element(by.cssContainingText('.app-name', 'Checkout'));
  }
}
