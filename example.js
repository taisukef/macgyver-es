import { macgyver } from './macgyver.js';

//create a context
const mac = macgyver();

//wrap a function...

const hello = () => {
  console.log('hello')
};

const goodbye = () => {
  console.log('goodbye')
};

const hi = mac(hello)

//declare it's behaviours

hi.isCalled(1, 7) //must be called between 1 and 7 times.

const bye = mac(goodbye).once() //must be called strictly once.

hi.before(bye) //hi must be called strictly before bye is called

hi(); hi(); bye()

/*
  //this will produce an error!
  hi(); hi(); bye(); hi()
*/

mac.validate()
