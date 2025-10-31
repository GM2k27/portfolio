$(document).ready(function () {
    const arr = [' Full-stack developer', ' Cybersecurity Enthusiast'];
    let ind = 0;

    function typingText() {
        $(".type").fadeOut(1000, function () {
            $(this).text(arr[ind]).fadeIn(1000);
        })

        ind = (ind + 1) % arr.length;
    }

    typingText();
    setInterval(typingText, 2000);

    // Contact form submission handler
    $('#contactForm').on('submit', function (e) {
        e.preventDefault();
        var form = $(this);
        var formData = form.serialize();

        $.ajax({
            url: form.attr('action'),
            method: 'POST',
            data: formData,
            dataType: 'json',
            success: function (response) {
                form.hide();
                $('#thankYouMessage').removeClass('hidden');
            },
            error: function (xhr, status, error) {
                alert('Sorry, there was an error sending your message. Please try again.');
            }
        });
    });

    // Go back link handler
    $('#goBackLink').on('click', function (e) {
        e.preventDefault();
        $('#thankYouMessage').addClass('hidden');
        $('#contactForm')[0].reset();
        $('#contactForm').show();
    });
})

