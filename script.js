const UserName = document.getElementById("username");
const PassWord = document.getElementById("password");
const MyButton = document.getElementById("button");
const Output = document.getElementById("output");

MyButton.addEventListener("click" , () => {
    const usename = UserName.value;
    const password = PassWord.value;
    console.log(usename,password);
    Output.textContent = usename 
})