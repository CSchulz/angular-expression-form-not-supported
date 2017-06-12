import { ExpressionFormNotSupportedPage } from './app.po';

describe('expression-form-not-supported App', () => {
  let page: ExpressionFormNotSupportedPage;

  beforeEach(() => {
    page = new ExpressionFormNotSupportedPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
