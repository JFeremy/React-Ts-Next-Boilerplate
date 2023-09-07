'use client';

import { useState } from 'react';

import { HStack } from '../../../styled-system/jsx';
import { Button } from '../button_temp';

interface CounterTempProps {
  readonly increment: string;
  readonly decrement: string;
}
const CounterTemp = (dictionary: CounterTempProps): React.JSX.Element => {
  const [count, setCount] = useState(0);

  return (
    <HStack gap='5' justify='center'>
      <Button onClick={() => setCount((n) => n - 1)} size='small'>
        {dictionary.decrement}
      </Button>
      <p>{count}</p>
      <Button onClick={() => setCount((n) => n + 1)} size='small'>
        {dictionary.increment}
      </Button>
    </HStack>
  );
};

export default CounterTemp;
