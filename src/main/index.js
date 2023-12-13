document.addEventListener("DOMContentLoaded", function() {
    const textContainer = document.getElementById("text-container");
    const texts = document.querySelectorAll(".text");

    textContainer.addEventListener("click", function() {
        texts.forEach(text => text.classList.toggle("active"));
    });
});


// moveable Box
function anime(){
    $('#box1')
        .animate({'marginLeft':'20px'},1000)
        .animate({'marginLeft':'-20px'},1000);
}

function anime2(){
    $('#box2')
        .animate({'opacity':'1'},500)
        .animate({'opacity':'0.7'},500);
    setTimeout("anime2()", 1000);
}

// TODO: Delete later, just for testing
function test() {
    $('#box1')
        .animate({'marginLeft':'20px'},1000)
        .animate({'marginLeft':'-20px'},1000);}