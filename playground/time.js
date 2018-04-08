var moment = require('moment');
// var date = new Date();
// console.log(date.getMonth());

// var date = moment();
// console.log(date.format('MMM Do YYYY'));


// 10:35 am
// 6:01 am

var someTimestamp = moment().valueOf();
console.log(someTimestamp);

var createdAt = 1234;
var date = moment(createdAt);
// date.subtract(12, 'hours');
console.log(date.format('h:mm a'));
