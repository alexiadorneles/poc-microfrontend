import { browser, by, element } from "protractor";
import listOptionsFrom from "../common/common";

export class Mf2Page {
  mf2URL = `${browser.baseUrl}mfe/two`;
  MENU_TITLE: string = 'Checkout';
  paymentListOptions = ['Credit Card', 'Cash'];
  confirmationOptionText = 'Congratulations your request is now confirmed!';

  async navigateToMf2Page(): Promise<unknown> {
    return browser.get(this.mf2URL);
  }
  
  async mf2ContainerTitleText(): Promise<string> {
    return element(by.css('.microfrontend-container h1')).getText();
  }
  
  addressOption() {
    return listOptionsFrom('Address');
   }
  
  paymentMethodOption() {
    return listOptionsFrom('Payment Method');
   }
  
  confirmationOption() {
    return listOptionsFrom('Confirmation');
  }

   addressContainerText() {
     return element.all(by.css('.form-line')).get(0);
   }
  
   confirmationContainerText() {
    return element.all(by.css('.microfrontend-container p'));
   }
  
   OptionsText() {
     return element.all(by.css('.microfrontend-container li'));
  }
}