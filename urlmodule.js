const EventEmitter = require('node:events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('Waterfull', () => {
  console.log('alert the user!');
  setTimeout(() => {
    console.log("this is an recurring alert")
  }, 3000);
});

myEmitter.emit('Waterfull');