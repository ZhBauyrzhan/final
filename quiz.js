$(document).ready(function () {
    $('.form-group').mouseover(function () {
        $(this).find('.hint').show();
    }).mouseout(function () {
        $(this).find('.hint').hide();
    });

    $('#submitBtn').click(function () {
        let score = 0;
        const answers = ['charles oliveira', 'ronaldo', 'lady gaga', 'taylow swift', 'kim kardashian'];
        const userAnswers = [
            $('#q1').val().trim().toLowerCase(),
            $('#q2').val().trim().toLowerCase(),
            $('#q3').val().trim().toLowerCase(),
            $('#q4').val().trim().toLowerCase(),
            $('#q5').val().trim().toLowerCase()
        ];
        // alert(userAnswers);
        for (let i = 0; i < answers.length; i++) {
            
            if (userAnswers[i] === answers[i]) {
                score++;
            }
        }

        const totalQuestions = answers.length;
        const grade = (score / totalQuestions) * 100;
        $('#grade').text(`You scored ${grade.toFixed(2)}% (${score} out of ${totalQuestions} correct)`);
        $('#result').show();
    });

    $('#quizForm input').keyup(function () {
        const unanswered = $('#quizForm input').filter(function () {
            return $.trim($(this).val()) === '';
        }).length;

        if (unanswered === 0) {
            $('#submitBtn').prop('disabled', false);
        } else {
            $('#submitBtn').prop('disabled', true);
        }
    });
});