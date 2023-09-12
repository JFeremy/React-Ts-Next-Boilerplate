import { render, screen } from '@testing-library/react';

import LocaleSwitcher from '..';

describe('LocaleSwitcher', () => {
  const expectedText = 'Lorem ipsum dolor sit amet.';
  it('shoud have expected text and correct link', async () => {
    render(<LocaleSwitcher title={expectedText} />); // ARRANGE

    const text = screen.getByText(expectedText); // ACT
    const links = screen.getAllByRole('link');

    expect(text).toBeInTheDocument(); // ASSERT
    expect(links).toHaveLength(2);
    expect(links[0]).toHaveProperty('href', 'http://localhost/en');
    expect(links[0]).toHaveProperty('text', 'en');
    expect(links[1]).toHaveProperty('href', 'http://localhost/fr');
    expect(links[1]).toHaveProperty('text', 'fr');
  });

  it('component matches snapshot', async () => {
    const view = render(<LocaleSwitcher title={expectedText} />); // ARRANGE
    expect(view.container).toMatchSnapshot();
  });
});
