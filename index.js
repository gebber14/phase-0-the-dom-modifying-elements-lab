// Write your code here!
//body.main.remove();
const removeMain = document.getElementById("main");
removeMain.remove();

const newHeader = document.createElement('h1');
newHeader.id = "victory";
newHeader.textContent = "Jason is the champion";