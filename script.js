const form = document.querySelector(".desc-form")
const email = document.querySelector("#ping-email")
const error = document.querySelector(".error")

form.addEventListener("submit", (e) => {
	//validate email
	if (email.value === "") {
		showError(
			"block",
			"var(--clr-secondary-red-400)",
			"Whoops! It looks like you forgot to add your email"
		)
		e.preventDefault()
	} else if (!validate(email.value)) {
		showError(
			"block",
			"var(--clr-secondary-red-400)",
			"Please provide a valid email address"
		)
		e.preventDefault()
	} else {
		// if email is valid, submit form
		error.style.display = "none"
	}

	// if email is valid, hide the error message on input change after submitted once
	email.addEventListener("input", () => {
		if (validate(email.value)) {
			showError("none", "var(--clr-secondary-green-400)", "")
		}
	})
})

function validate(email) {
	// regex for email validation
	const regex =
		/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/

	return regex.test(email)
}

//show error message
function showError(display, borderColor, message) {
	error.style.display = display
	email.style.borderColor = borderColor
	error.textContent = message
}
