import React from 'react';

import { TLocale } from '@/interfaces';
import { getComponentsTranslation } from '@/utils/translate';
import { css } from '#pcss/css';
import { center } from '#pcss/patterns';

interface HelloTempProps {
  readonly lang: TLocale;
}
const HelloTemp = ({ lang }: HelloTempProps): React.JSX.Element => {
  const { hello: tHello } = getComponentsTranslation(lang, ['hello']);

  return (
    <div className={center({ bg: 'red.200' })}>
      <div
        className={css({
          fontSize: '2xl',
          fontWeight: 'bold',
          fontFamily: 'fira',
        })}
      >
        {tHello['title']}
      </div>
    </div>
  );
};

export default HelloTemp;
