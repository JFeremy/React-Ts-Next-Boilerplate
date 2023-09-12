import { fireEvent, render, screen } from '@testing-library/react';

import CounterTemp from '..';

describe('CounterTemp', () => {
  const expectedTexts = {
    increment: 'Lorem',
    decrement: 'Ipsum',
  };

  it('shoud have expected texts and buttons', async () => {
    render(
      <CounterTemp
        increment={expectedTexts.increment}
        decrement={expectedTexts.decrement}
      />,
    );

    const buttons = screen.getAllByRole('button');

    expect(screen.getByText(expectedTexts.increment)).toBeInTheDocument();
    expect(screen.getByText(expectedTexts.decrement)).toBeInTheDocument();
    expect(screen.getByText(0)).toBeInTheDocument();
    expect(buttons).toHaveLength(2);
  });

  it('shoud count value be 1 after increment button clicked', async () => {
    render(
      <CounterTemp
        increment={expectedTexts.increment}
        decrement={expectedTexts.decrement}
      />,
    );

    fireEvent.click(screen.getByText(expectedTexts.increment));

    expect(screen.getByText(1)).toBeInTheDocument();
  });

  test('shoud count value be -1 after des button clicked', async () => {
    render(
      <CounterTemp
        increment={expectedTexts.increment}
        decrement={expectedTexts.decrement}
      />,
    );

    fireEvent.click(screen.getByText(expectedTexts.decrement));

    expect(screen.getByText(-1)).toBeInTheDocument();
  });

  it('component matches snapshot', async () => {
    const view = render(
      <CounterTemp
        increment={expectedTexts.increment}
        decrement={expectedTexts.decrement}
      />,
    );
    expect(view.container).toMatchSnapshot();
  });
});
