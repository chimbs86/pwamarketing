import { newE2EPage } from '@stencil/core/testing';

describe('app-non', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-non></app-non>');

    const element = await page.find('app-non');
    expect(element).toHaveClass('hydrated');
  });

  it('contains a "Profile Page" button', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-non></app-non>');

    const element = await page.find('app-non ion-content ion-button');
    expect(element.textContent).toEqual('Profile page');
  });
});
