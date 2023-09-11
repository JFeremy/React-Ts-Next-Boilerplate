'use client';
import { useState } from 'react';

interface CounterTempBehaviorProps {
  readonly initialCount: number;
}

const useCounterTempBehavior = ({ initialCount }: CounterTempBehaviorProps) => {
  const [count, setCount] = useState(initialCount);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return { count, increment, decrement };
};

export default useCounterTempBehavior;
