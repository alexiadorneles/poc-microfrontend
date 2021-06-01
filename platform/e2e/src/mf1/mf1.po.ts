import { browser, by, element } from "protractor";
import listOptionsFrom from "../common/common";

export class Mf1Page {
  mf1URL = `${browser.baseUrl}mfe/one`;
  MENU_TITLE: string = 'Menu';
  mealsListOptions = ['Beans', 'Lasagna', 'Pasta'];
  dessertsListOptions = ['Ice cream', 'Cake', 'Chocolate'];

  async navigateToMf1Page(): Promise<unknown> {
    return browser.get(this.mf1URL);
  }
  async getCurrentURL(): Promise<string> {
    return browser.getCurrentUrl();
  }

   async mf1ContainerTitleText(): Promise<string> {
    return element(by.css('.microfrontend-container h1')).getText();
   }
  
  mealsOption() {
    return listOptionsFrom('Meals');
   }
  
   dessertsOption() {
    return listOptionsFrom('Desserts');
   }
  
  OptionsText() {
    return element.all(by.css('.microfrontend-container li'));
  }
}