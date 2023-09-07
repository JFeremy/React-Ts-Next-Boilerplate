import { render, screen } from '@testing-library/react';

import Loading from './loading';

describe('Loading', () => {
  it('shoud have expected text', async () => {
    render(<Loading />); // ARRANGE

    const text = screen.getByText('⌛ Loading feed... ⌛');

    expect(text).toBeInTheDocument();
  });

  it('component matches snapshot', async () => {
    const view = render(<Loading />);
    expect(view.container).toMatchSnapshot();
  });
});
