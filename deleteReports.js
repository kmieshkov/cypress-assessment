const fs = require("fs");
const path = require("path");

fs.rmdirSync("./cypress/reports", { recursive: true });
fs.mkdirSync("./cypress/reports");
const currentPath = path.join(__dirname, "./", "output.html");
const destinationPath = path.join(__dirname, "./cypress/reports", "output.html");

fs.rename(currentPath, destinationPath, function (err) {
	if (err) {
		throw err
	}
});