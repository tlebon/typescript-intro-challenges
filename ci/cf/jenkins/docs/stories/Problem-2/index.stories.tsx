import { storiesOf } from '@storybook/react';
import React from 'react';
import Basics from './index';

const handleChange = (event:React.MouseEvent):void => {
    alert('Success')
}


storiesOf('Typescript Knowledge Day', module)
    //Uncomment the next Row to Begin!
    .add('Problem-1', () => <Basics text={'click me'} handleChange={handleChange} />);

