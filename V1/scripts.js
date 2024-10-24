document.addEventListener('DOMContentLoaded', function () {
    showContent('home');
});

function showContent(id) {
    var contents = document.querySelectorAll('.content');
    contents.forEach(function (content) {
        content.style.display = 'none';
    });
    document.getElementById(id).style.display = 'block';
    window.scrollTo(0, 0); // Scroll to top when showing content
}

var flashcards = document.querySelectorAll('.flashcard');
flashcards.forEach(function (flashcard) {
    flashcard.addEventListener('click', function (event) {
        flashcard.classList.toggle('show');
        event.preventDefault(); // Prevent the default scroll behavior
        return false; // Ensure no default scrolling happens
    });
});
