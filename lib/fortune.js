var fortuneCookies = [
	'You will become rich.', 
	'You will be happy.', 
	'You will live a long time.', 
	'The future looks bright.',
	'Do not fear the future.'
];

exports.getFortune = function() {
	var fortune = Math.floor(Math.random() * fortuneCookies.length);
	return fortuneCookies[fortune];
}