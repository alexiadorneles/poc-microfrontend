import { Platform } from './platform.po';

describe('Platform Component', () => {
  let page: Platform;

  beforeEach(() => {
    page = new Platform();
  });

  it('should display welcome message', async () => {
    await page.navigateToHomePage();
    expect(await page.containerTitleText()).toEqual(page.MENU_TITLE);
  });
});
