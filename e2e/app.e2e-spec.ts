import { RechenhilfePage } from './app.po';

describe('rechenhilfe App', function() {
  let page: RechenhilfePage;

  beforeEach(() => {
    page = new RechenhilfePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
