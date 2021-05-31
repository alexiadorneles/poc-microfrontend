import { browser } from 'protractor';
import { AppPage } from './app/app.po';
import { Mf1Page } from './mf1/mf1.po';

describe('User journey from Platform to MF1', () => {
  let platform: AppPage = new AppPage();
  let mf1Page: Mf1Page = new Mf1Page();

  it('should navigate to see all steps and options', async () => {
    //Given
    await platform.navigateToHomePage();
    expect(await platform.containerTitleText()).toEqual(platform.MENU_TITLE);

    //When
    platform.menuButton().click();
    await browser.sleep(5000);
    expect(await platform.getCurrentURL()).toBe(mf1Page.mf1URL);
    expect(await mf1Page.mf1ContainerTitleText()).toBe(mf1Page.MENU_TITLE);
    
    //Then
    // mf1Page.mealsOption().click();
    // await browser.sleep(500);
    // expect(await browser.getCurrentUrl()).toBe(mf1Page.mf1URL);
    // expect(await mf1Page.mealsMenuText().getText()).toEqual(mf1Page.mealsListOptions);
  });
});
