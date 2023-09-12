import { act, renderHook } from '@testing-library/react';

import useCounterTempBehavior from '../behavior';

describe('useCounterTempBehavior', () => {
  it('should initialize count with the provided initialCount', () => {
    const { result } = renderHook(() =>
      useCounterTempBehavior({ initialCount: 5 }),
    );

    expect(result.current.count).toBe(5);
  });

  it('should increment count when increment function is called', () => {
    const { result } = renderHook(() =>
      useCounterTempBehavior({ initialCount: 0 }),
    );

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(1);
  });

  it('should decrement count when decrement function is called', () => {
    const { result } = renderHook(() =>
      useCounterTempBehavior({ initialCount: 3 }),
    );

    act(() => {
      result.current.decrement();
    });

    expect(result.current.count).toBe(2);
  });
});
