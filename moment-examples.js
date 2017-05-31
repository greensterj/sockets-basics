var moment = require('moment');
var now = moment();

// console.log(now.format());
// console.log(now.format('X'));
// console.log(now.format('x'));

var timestamp = 1496230033300;
var timestampMoment = moment.utc(timestamp);

console.log(timestampMoment.local().format('h:mma'));

// now.subtract(1, 'year');
//
// console.log(now.format());
// console.log(now.format('HH:mm'));
// console.log(now.format('YYYY MMM Do, hh:mma'));
