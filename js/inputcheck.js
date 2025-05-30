// check that username is 3-16 characters and is only a-z, A-Z, and 0-9, no spaces
function checkUser(name) {
	return (name.length >= 3 && name.length <= 16) && (name.match(/^[A-Za-z0-9]+$/));
}

// check that password is not too long or too short. can be any combination of letters, numbers, or characters
function checkPass(pass) {
	return pass.length >= 6 && pass.length <= 128;
}

// check that username is 3-16 characters. used in newaccount.html
function checkUserLength(name) {
	return name.length >= 3 && name.length <= 16;
}

// check that username is only a-z, A-Z, and 0-9, no spaces. used in newaccount.html
function checkUserChars(name) {
	return name.match(/^[A-Za-z0-9]+$/);
}