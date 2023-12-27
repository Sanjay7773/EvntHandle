//[1]=>   click a 1button and change some text what you want change like EVENT HANDLE
var bt1 = document.querySelector("#bt1");
var h1 = document.querySelector("#h1");

bt1.addEventListener("mouseover", function () {
    h1.style.color = "blue"
    bt1.style.color = "green"
    // alert("chala means ==> OK  ")
})
bt1.addEventListener("mouseout", function () {
    h1.style.color = "black"
    bt1.style.color = "black"

    // alert("chala means ==> OK  ")
})


//[2]=> click a button and two img exchage to our position swap-place togather

var img1 = document.querySelector("#img1");
var img2 = document.querySelector("#img2");
var swap = document.querySelector("#swap");
swap.addEventListener("click", function () {
    // alert("chala  ok");
       var a = img1.src ;
       var b = img2.src;
       img1.src = b;
       img2.src = a;
});


//[3]=> 

