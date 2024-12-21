const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/bewildered-squid.png"){
    myImage.setAttribute("src", "images/nose-squid.png");
  } 
  else if (mySrc === "images/nose-squid.png"){
    myImage.setAttribute("src", "images/nostril-squid.png")
  }
  else if (mySrc === "images/nostril-squid.png"){
    myImage.setAttribute("src", "images/smug-squid.png")
  }
  else {
    myImage.setAttribute("src", "images/bewildered-squid.png");
  }
});

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("meow?");
    localStorage.setItem("name", myName);
    myHeading.textContent = `squid likes you, ${myName}`;
  }
  const myName = prompt("meow?.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `meow meow, ${myName}`;
  }
  