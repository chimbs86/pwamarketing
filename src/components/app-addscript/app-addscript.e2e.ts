import { newE2EPage } from '@stencil/core/testing';

describe('app-addscript', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-addscript></app-addscript>');

    const element = await page.find('app-addscript');
    expect(element).toHaveClass('hydrated');
  });

  it('displays the specified name', async () => {
    const page = await newE2EPage({ url: '/profile/joseph' });

    const element = await page.find('app-addscript ion-content p');
    expect(element.textContent).toContain('My name is Joseph.');
  });
});
