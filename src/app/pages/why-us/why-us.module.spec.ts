import { WhyUsModule } from './why-us.module';

describe('WhyUsModule', () => {
  let whyUsModule: WhyUsModule;

  beforeEach(() => {
    whyUsModule = new WhyUsModule();
  });

  it('should create an instance', () => {
    expect(whyUsModule).toBeTruthy();
  });
});
