var CronJob = require('cron').CronJob;
const fetchGithub = require('./tasks/fetch-github');
//Fetch Github jobs...
new CronJob('* * * * *', fetchGithub, null, true, 'America/Los_Angeles');
