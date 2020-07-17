import { storiesOf } from '@storybook/react';
import React from 'react';
import Advanced from './index';


const product = {
    description: { en: 'With the Tim marks the beginning of a new era in eclectic mobility. Experience breathtaking design and curves suitable for everyday use. And all this with an attractive face. Despite its compact dimensions and a weight of 70kg, the Tim offers as much interior space as a BMW 5 Series. The elbow delivers full torque right from the start. The engine offers a range of up to 120 km (on a bicycle). ' },
    masterVariant: { images: [{ url: 'https://miro.medium.com/fit/c/256/256/1*FnC9Adv_h6LHK5PSmrkunw.jpeg' }, { url: 'https://media-exp1.licdn.com/dms/image/C4D03AQFnwoAtHsWIWw/profile-displayphoto-shrink_400_400/0?e=1600300800&v=beta&t=Cmgku2suqS8mNwhjh1uAxIR_dgvaARHdSjbuQ85eZSc' }] },
    name: { en: 'The new Tim! ' },
};
const price = {
    value: {
        centAmount: '4.230,90 €',
    },
};
const attributes = [{
    name: 'transmission',
    value:'Automatic' ,
}, {
    name: 'engine_type',
    value:'electric' ,
}, {
    name: 'power',
    value: '300 kW (200 PS)',
}];

storiesOf('Typescript Knowledge Day-2', module)
    .add('Problem-4', () => <Advanced
        showHint
        attributes={attributes}
        description={product.description.en}
        images={product.masterVariant.images}
        name={product.name.en}
        price={price.value.centAmount} />);

