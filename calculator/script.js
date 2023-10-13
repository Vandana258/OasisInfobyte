let user_input = document.getElementById('user-input');
let button = document.querySelectorAll('button');
let result = ""; // Variable to store the result

button.forEach(element => {
    element.addEventListener('click', (e) => {
        console.log(e.target.textContent);
        if (e.target.textContent === "C") {
            user_input.innerHTML = "";
            result = ""; // Clear the result when "C" is clicked
        } else if (e.target.textContent === "del") {
            user_input.innerHTML = user_input.innerHTML.slice(0, -1);
        } else if (e.target.textContent === "=") {
            try {
                result = eval(user_input.innerHTML);
                user_input.innerHTML = result;
            } catch (error) {
                user_input.innerHTML = "Error";
            }
        } else {
            user_input.innerHTML += e.target.textContent;
        }
    });
});
