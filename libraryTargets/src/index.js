console.log('entry file');

import('./some-chunk').then(() => console.log('chunk loaded'));

export default 'default';

export const named = 'named';
