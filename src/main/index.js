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
