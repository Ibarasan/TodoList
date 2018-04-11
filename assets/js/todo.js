$('ul').on('click', 'li', function() {
    $(this).toggleClass("completed");
});

// Deleting todos

$('ul').on('click', 'span', function(e) {
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation(); 
});

$('input[type="text"]').keypress(function(e) {
    if(e.which === 13) {
        let text = $(this).val(); //Pobieranie tekstu z inputu
        $('ul').append(`<li><span><i class="fas fa-trash"></i></span> ${text}</li>`);
        $(this).val("");
    }
});

$("#toggle-form").click(function(){
	$("input[type='text']").fadeToggle();
});
