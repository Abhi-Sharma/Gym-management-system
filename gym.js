let joinBtn = document.querySelector(".nav-btn");
let joinPage = document.querySelector(".joinUs");
let cross = document.querySelector(".cross");
let submit = document.querySelector(".submitForm");

joinBtn.addEventListener("click",()=>{
    joinPage.classList.remove("signup");
});

cross.addEventListener("click",()=>{
    joinPage.classList.add("signup");
});

submit.addEventListener("click",()=>{
    alert("SUCCESSFULLY SUBMITTED FORM WAIT FOR THE RESPONSE");
});
