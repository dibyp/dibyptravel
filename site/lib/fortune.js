var fortuneCookies = [
	"1",
	"2",
	"3",
	"4",
	"5",
];
exports.getFortune = function() {
	var idx = Math.floor(Math.random() * fortuneCookies.length);
	return fortuneCookies[idx];
};
