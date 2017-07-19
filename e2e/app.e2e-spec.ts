import { NoejectPage } from './app.po';

describe('noeject App', () => {
  let page: NoejectPage;

  beforeEach(() => {
    page = new NoejectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
