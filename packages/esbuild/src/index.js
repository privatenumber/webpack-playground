import './some-chunk-a';

const value = 'entry file';

console.log(value);

import('./some-chunk-b').then(() => console.log('chunk loaded'));


export default value;
