import { render, screen } from '@testing-library/react';

import { getComponentsTranslation } from '@/utils/translate';

import HelloTemp from '..';

jest.mock('@/utils/translate', () => ({
  getComponentsTranslation: jest.fn(),
}));

describe('HelloTemp', () => {
  const mockTranslationData = {
    hello: {
      title: 'Lorem, ipsum dolor.',
    },
  };
  beforeEach(() => {
    (getComponentsTranslation as jest.Mock).mockReturnValue(
      mockTranslationData,
    );
  });

  it('shoud have expected text', async () => {
    render(<HelloTemp lang={'fr'} />); // ARRANGE

    const text = screen.getByText(mockTranslationData.hello.title); // ACT

    expect(text).toBeInTheDocument(); // ASSERT
  });

  it('component matches snapshot', async () => {
    const view = render(<HelloTemp lang={'fr'} />); // ARRANGE
    expect(view.container).toMatchSnapshot();
  });
});
