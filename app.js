import { uniq } from 'lodash';
import insane from 'insane';
import jsonp from 'jsonp';

import { apiKey as key, url, sayHi } from './src/config';
//default and named exports
import User, { createUrl, gravatar } from './src/user';


const ages = [1,1,4, 52,12];

console.log(uniq(ages), key, sayHi('Vlad'));

const user1 = new User('Vlad', 'test@example.com', 'localhost');
console.log(user1, gravatar(user1.email));
