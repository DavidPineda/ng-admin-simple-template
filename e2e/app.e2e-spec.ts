import { ArmaTuPaqueteAdminPage } from './app.po';

describe('arma-tu-paquete-admin App', () => {
  let page: ArmaTuPaqueteAdminPage;

  beforeEach(() => {
    page = new ArmaTuPaqueteAdminPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
