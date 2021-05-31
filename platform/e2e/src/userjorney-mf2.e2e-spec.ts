import { browser, logging } from 'protractor';
import { AppPage } from './app/app.po';
import { Mf2Page } from './mf2/mf2.po';

describe('User journey from Platform to MF2', () => {
  let platform: AppPage = new AppPage();
  let mf2Page: Mf2Page = new Mf2Page();

  it('should navigate from Platform to MF1 to see all options and substeps', async () => {
    //Given
    await platform.navigateToHomePage();
    expect(await platform.containerTitleText()).toEqual('Microfrontend Not Found');

    //When
    await mf2Page.navigateToMf2Page();
    expect(await browser.getCurrentUrl()).toBe(mf2Page.mf2URL);
   
    mf2Page.addressOption().click();
    console.log('-----', mf2Page.addressContainerText())
    expect(mf2Page.addressContainerText()).toContain('bbbbbb');
  });

  describe('User journey from platform to MFs', () => {
    

    it('should navigate in Step checkout', async () => {
      //Given
      await platform.navigateToHomePage();
  
      //When
      platform.checkoutButton().click();
      await browser.sleep(500);
  
      //Then
      expect(await platform.getCurrentURL()).toBe(mf2Page.mf2URL);
      expect(await mf2Page.mf2ContainerTitleText()).toBe(mf2Page.MENU_TITLE);
    });
  })

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
