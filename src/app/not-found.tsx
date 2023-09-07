'use client';

import Link from 'next/link';
import React from 'react';

const NotFound = (): React.JSX.Element => (
  <div>
    <h1>⛔ 404 - Page Not Found ⛔</h1>
    <Link href='/'>Homepage</Link>
  </div>
);

export default NotFound;
