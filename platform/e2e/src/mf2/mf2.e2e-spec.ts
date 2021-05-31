import { browser } from "protractor";
import { Mf2Page } from "./mf2.po";


describe('MicroFrontend 2 Component', () => {
  let mf2Page: Mf2Page;

  beforeEach(() => {
    mf2Page = new Mf2Page();
  });
    
  it('should navigate in Checkout Options', async () => {
    //Given
    await mf2Page.navigateToMf2Page();
    expect(await browser.getCurrentUrl()).toBe(mf2Page.mf2URL);
   
    mf2Page.addressOption().click();
    console.log('-----', mf2Page.addressContainerText())
    expect(mf2Page.addressContainerText()).toContain('bbbbbb');
  });
})