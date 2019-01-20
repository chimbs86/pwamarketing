import { AppAddScript } from './app-addscript';

describe('app-addscript', () => {
  it('builds', () => {
    expect(new AppAddScript()).toBeTruthy();
  });

  describe('normalization', () => {
    it('returns a blank string if the name is undefined', () => {
      const component = new AppAddScript();
      expect(component.formattedName()).toEqual('');
    });

    it('capitalizes the first letter', () => {
      const component = new AppAddScript();
      component.name = 'quincy';
      expect(component.formattedName()).toEqual('Quincy');
    });

    it('lower-cases the following letters', () => {
      const component = new AppAddScript();
      component.name = 'JOSEPH';
      expect(component.formattedName()).toEqual('Joseph');
    });

    it('handles single letter names', () => {
      const component = new AppAddScript();
      component.name = 'q';
      expect(component.formattedName()).toEqual('Q');
    });
  });
});
