// exemplo de mouseover


var title = document.querySelector("#title");

title.addEventListener("mouseover", function () {

this.style.backgroundColor = 'yellow';


});


var subtitle = document.querySelector(".subtitle");

subtitle.addEventListener("mouseover", function () {


this.style.backgroundColor = "purple";

});


var subtitle2 = document.querySelector(".subtitle2");


subtitle2.addEventListener("mouseout", function () {


this.style.backgroundColor="red";


});