const signUpButton = document.getElementById ("signUp");
console.log(signUpButton);
const signInButton = document.getElementById ("signIn");
const container = document.getElementById ("container");
const signUpMobile = document.getElementById ("sign-up-mobile");
const signInMobile = document.getElementById ("sign-in-mobile");
signUpButton.addEventListener("click", () => {
    container.classList.add("right-panel-active")
})
signInButton.addEventListener("click", () => {
    container.classList.remove("right-panel-active")
});
signUpMobile.addEventListener("click", () => {
    container.classList.add("right-panel-active")
})
signInMobile.addEventListener("click", () => {
    container.classList.remove("right-panel-active")
});