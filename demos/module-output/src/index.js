const value = 'entry file';

console.log(value);

import('./some-chunk').then(() => console.log('chunk loaded'));


export default value;
