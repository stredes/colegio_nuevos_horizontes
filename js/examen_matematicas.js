document.getElementById('mathExamForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const correctAnswers = {
        q1: 'b', // 2 + 2 = 4
        q2: 'b', // 100 km/h * 3h = 300 km
        q3: 'b'  // 5 * 8 = 40
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

    // Opcionalmente, redirigir o limpiar el formulario
    // window.location.href = 'portal_estudiante.html';
});