import { render, screen } from '@testing-library/react';

import NotFound from '../not-found';

describe('NotFound', () => {
  it('shoud have expected text', async () => {
    render(<NotFound />); // ARRANGE

    const text = screen.getByText('⛔ 404 - Page Not Found ⛔');
    const links = screen.getAllByRole('link');

    expect(text).toBeInTheDocument();
    expect(links).toHaveLength(1);
    expect(links[0]).toHaveProperty('href', 'http://localhost/');
    expect(links[0]).toHaveProperty('text', 'Homepage');
  });

  it('component matches snapshot', async () => {
    const view = render(<NotFound />);
    expect(view.container).toMatchSnapshot();
  });
});
