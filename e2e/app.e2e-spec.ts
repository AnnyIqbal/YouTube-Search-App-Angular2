import { UTubeSearchAppPage } from './app.po';

describe('u-tube-search-app App', () => {
  let page: UTubeSearchAppPage;

  beforeEach(() => {
    page = new UTubeSearchAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
