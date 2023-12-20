document.addEventListener("DOMContentLoaded", function() {
    const textContainer = document.getElementById("text-container");
    const texts = document.querySelectorAll(".text");

    textContainer.addEventListener("click", function() {
        texts.forEach(text => text.classList.toggle("active"));
    });
});


// moveable Box
function anime(x,y){
    $('#box1')
        .animate({'marginLeft': x + '%'},1000)
        .animate({'marginTop': y + '%'},1000);
}
