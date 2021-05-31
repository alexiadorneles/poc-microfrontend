import { browser, by, element } from "protractor";

export class Mf2Page {
  mf2URL = `${browser.baseUrl}mfe/two`;
  MENU_TITLE: string = 'Checkout';
  dessertsListOptions = ['Ice Cream', 'Cake', 'Chocolate'];

  async navigateToMf2Page(): Promise<unknown> {
    return browser.get(this.mf2URL);
  }
  
  async mf2ContainerTitleText(): Promise<string> {
    return element(by.css('.microfrontend-container h1')).getText();
   }
  
   addressOption() {
     return element(by.cssContainingText('.list-app-options li a', 'Address'));
   }

   addressContainerText() {
     return element.all(by.css('.form-line p')).first();
  }
}