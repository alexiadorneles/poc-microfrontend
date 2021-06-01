import { browser } from 'protractor';
import { Platform } from './platform/platform.po';
import { Mf2Page } from './mf2/mf2.po';

describe('User journey from Platform to MF2', () => {
  let platform: Platform = new Platform();
  let mf2Page: Mf2Page = new Mf2Page();

  it('should navigate to see all steps and options', async () => {
    await platform.navigateToHomePage();
    expect(await platform.containerTitleText()).toEqual('Microfrontend Not Found');

    await platform.checkoutButton().click();
    expect(await browser.getCurrentUrl()).toBe(mf2Page.mf2URL);
    expect(await mf2Page.mf2ContainerTitleText()).toBe(mf2Page.MENU_TITLE);

    await mf2Page.paymentMethodOption().click()
    expect(await mf2Page.OptionsText().getText()).toEqual(mf2Page.paymentListOptions);

    await mf2Page.confirmationOption().click()
    expect(await mf2Page.confirmationContainerText().get(0).getText()).toEqual(mf2Page.confirmationOptionText);

    await mf2Page.addressOption().click()
    expect(await mf2Page.confirmationContainerText().first().getText()).toEqual('Avenida Paulista');
    expect(await mf2Page.confirmationContainerText().last().getText()).toEqual('3');
  });
});
