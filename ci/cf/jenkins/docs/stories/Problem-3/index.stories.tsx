import { storiesOf } from '@storybook/react';
import React from 'react';
import Basics from './index';

const currency = 'EUR';
const price = 3467987;
const locale = 'en-US';

storiesOf('Typescript Knowledge Day', module)
    //Uncomment the next Row to Begin!
    .add('Problem-3', () => <Basics price={price} currency={currency} locale={locale} />);

