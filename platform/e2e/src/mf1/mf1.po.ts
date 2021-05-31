import { browser, by, element } from "protractor";

export class Mf1Page {
  mf1URL = `${browser.baseUrl}mfe/one`;
  MENU_TITLE: string = 'Menu';
  mealsListOptions = ['Beans', 'Lasagna', 'Pasta'];

  async navigateToMf1Page(): Promise<unknown> {
    return browser.get(this.mf1URL);
  }

   async mf1ContainerTitleText(): Promise<string> {
    return element(by.css('.microfrontend-container h1')).getText();
   }
  
   mealsOption() {
    return element(by.cssContainingText('.list-app-options li a', 'Meals'));
   }
  
  mealsMenuText() {
    return element.all(by.css('.microfrontend-container li'));
  }
}