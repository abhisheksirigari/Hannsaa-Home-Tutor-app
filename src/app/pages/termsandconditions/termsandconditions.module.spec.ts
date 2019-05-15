import { TermsandconditionsModule } from './termsandconditions.module';

describe('TermsandconditionsModule', () => {
  let termsandconditionsModule: TermsandconditionsModule;

  beforeEach(() => {
    termsandconditionsModule = new TermsandconditionsModule();
  });

  it('should create an instance', () => {
    expect(termsandconditionsModule).toBeTruthy();
  });
});
