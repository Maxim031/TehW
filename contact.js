$(document).ready(function () {
    $('#contactForm').on('submit', function (e) {
        e.preventDefault(); // Nu trimite normal

        $.ajax({
            type: 'POST',
            url: 'salveaza_mesaj.php',
            data: $(this).serialize(),
            success: function (raspuns) {
                $('#raspuns').html('<p style="color:green;">Mesaj trimis!</p>');
                $('#contactForm')[0].reset();
            },
            error: function () {
                $('#raspuns').html('<p style="color:red;">A apărut o eroare.</p>');
            }
        });
    });
});
