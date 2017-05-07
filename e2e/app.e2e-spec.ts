import { NgAdminSimpleTemplate } from './app.po';

describe('ng-admin-simple-template App', () => {
  let page: NgAdminSimpleTemplate;

  beforeEach(() => {
    page = new NgAdminSimpleTemplate();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
