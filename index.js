const passwordOutput = document.getElementById('password-output');
const dataLowercase = "qwertyuiopasdfghjklzxcvbnm".split('');
const dataUppercase = "QWERTYUIOPASDFGHJKLZXCVBNM".split('');
const dataNumbers = "0123456789".split('');
const dataSymbols = "`~!@#$%^&*())_+=-{}[]\|;':,./<>?".split('');

function toCopy() {
	passwordOutput.select();
	document.execCommand('copy');
	generateButton.innerText = "Copied !"
	setTimeout(function () {
		generateButton.innerText = "Generate Password"
	}, 2000);
}

function generatePassword() {
	let passwordLength = parseInt(document.getElementById('display-password-length').value);
	let newPassword = '';
	let data = [];
	let i = 0;

	lowercase.checked ? data = data.concat(dataLowercase) : [];
	uppercase.checked ? data = data.concat(dataUppercase) : [];
	numbers.checked ? data = data.concat(dataNumbers) : [];
	symbols.checked ? data = data.concat(dataSymbols) : [];

	if (data.length === 0)
	{
		alert("Please select an option for your password.")
		return ;
	}

	while (i < passwordLength)
	{
		newPassword += data[Math.floor(Math.random() * data.length)];
		i++;
	}
	passwordOutput.value = newPassword;
	toCopy();
}
