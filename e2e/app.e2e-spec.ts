import { TestnamePage } from './app.po';

describe('testname App', function() {
  let page: TestnamePage;

  beforeEach(() => {
    page = new TestnamePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
