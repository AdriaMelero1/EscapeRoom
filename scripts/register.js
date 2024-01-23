//CAPTURE BUTTONS
const btnRegister = document.querySelector('button');




btnRegister.addEventListener('click', () => {
	console.log("Register");
	console.log("User: " + fieldUsername.value + " Password: " + fieldPassword.value);

	let user = [fieldUsername.value, fieldPassword.value];

	// Check if user already exists
	if (localStorage.getItem(user[0])) {
		console.log('User already exists');
	} else {
		localStorage.setItem(user[0], JSON.stringify(user));
		console.log('User registered successfully');
	}
});