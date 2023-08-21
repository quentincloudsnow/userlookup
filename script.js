async function verifyUser() {
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;

    const response = await fetch("users.json");
    const users = await response.json();

    const foundUser = users.find(user => user.firstName === firstName && user.lastName === lastName);

    const resultElement = document.getElementById("result");
    if (foundUser) {
        resultElement.innerText = "User found!";
    } else {
        resultElement.innerText = "User not found.";
    }
}
