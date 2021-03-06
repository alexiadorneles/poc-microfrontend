import { browser } from "protractor";
import { Mf1Page } from "./mf1.po";

describe('MicroFrontend 1 Component', () => {
  let mf1Page: Mf1Page;

  beforeEach(() => {
    mf1Page = new Mf1Page();
  });

  it('should navigate in Menu Options', async () => {
    //Given
    await mf1Page.navigateToMf1Page();

    //When
    await mf1Page.mealsOption().click();

    //Then
    expect(await browser.getCurrentUrl()).toBe(mf1Page.mf1URL);
    expect(await mf1Page.OptionsText().getText()).toEqual(mf1Page.mealsListOptions);
  });
});