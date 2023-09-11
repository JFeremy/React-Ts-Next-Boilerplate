'use client';

import { HStack } from '#pcss/jsx';

import { Button } from '../../ui/button_temp';
import useCounterTempBehavior from './behavior';

interface CounterTempProps {
  readonly increment: string;
  readonly decrement: string;
}
const CounterTemp = (dictionary: CounterTempProps): React.JSX.Element => {
  const {
    count,
    increment: handleIncrement,
    decrement: handleDecrement,
  } = useCounterTempBehavior({ initialCount: 0 });

  return (
    <HStack gap='5' justify='center'>
      <Button onClick={handleDecrement} size='small'>
        {dictionary.decrement}
      </Button>
      <p>{count}</p>
      <Button onClick={handleIncrement} size='small'>
        {dictionary.increment}
      </Button>
    </HStack>
  );
};

export default CounterTemp;
