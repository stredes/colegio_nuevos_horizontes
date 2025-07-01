document.getElementById('languageExamForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const correctAnswers = {
        q1: 'b', // Un día soleado y alegre
        q2: 'c', // Casa
        q3: 'b'  // juega
    };

    const form = event.target;
    const formData = new FormData(form);
    let correctCount = 0;
    const totalQuestions = Object.keys(correctAnswers).length;

    for (const [question, correctAnswer] of Object.entries(correctAnswers)) {
        const userAnswer = formData.get(question);
        if (userAnswer === correctAnswer) {
            correctCount++;
        }
    }

    const incorrectCount = totalQuestions - correctCount;

    const estado = correctCount >= 2 ? 'Aprobado' : 'Reprobado';

    alert(`Examen finalizado.\n\nRespuestas correctas: ${correctCount}\nRespuestas incorrectas: ${incorrectCount}\n\nEstado: ${estado}`);
});