var text = "Write your own news and upload it to the website";
var delay = 100;
var elem = document.getElementById("header");

var print_text = function(text, elem, delay) {
    if(text.length > 0) {
        elem.innerHTML += text[0];
        setTimeout(
            function() {
                print_text(text.slice(1), elem, delay);
            }, delay
        );
    }
}
print_text(text, elem, delay);
$('a').on('click', function () {
    $('.button').addClass('upload').delay(2400).queue(function () {
        $(this).addClass('uploaded')
    });
});
