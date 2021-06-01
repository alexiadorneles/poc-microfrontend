import { browser } from 'protractor';
import { Platform } from './platform/platform.po';
import { Mf1Page } from './mf1/mf1.po';

describe('User journey from Platform to MF1', () => {
  let platform: Platform = new Platform();
  let mf1Page: Mf1Page = new Mf1Page();

  it('should navigate to see all steps and options', async () => {
    await platform.navigateToHomePage();
    expect(await platform.containerTitleText()).toEqual(platform.MENU_TITLE);

    await platform.menuButton().click();
    expect(await mf1Page.getCurrentURL()).toBe(mf1Page.mf1URL);
    expect(await mf1Page.mf1ContainerTitleText()).toBe(mf1Page.MENU_TITLE);
    
    await mf1Page.mealsOption().click();
    expect(await browser.getCurrentUrl()).toBe(mf1Page.mf1URL);
    expect(await mf1Page.OptionsText().getText()).toEqual(mf1Page.mealsListOptions);

    mf1Page.dessertsOption().click();
    expect(await browser.getCurrentUrl()).toBe(mf1Page.mf1URL);
    expect(await mf1Page.OptionsText().getText()).toEqual(mf1Page.dessertsListOptions);
  });
});
