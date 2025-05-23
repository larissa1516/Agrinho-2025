const nomeInput = document.getElementById('nome');
const emailInput = document.getElementById('email');

function validateInput(inputElement) {
    const validationMessage = inputElement.nextElementSibling;
    if (inputElement.checkValidity()) {
        inputElement.classList.remove('is-invalid');
        inputElement.classList.add('is-valid');
        validationMessage.textContent = 'Colheita bem-sucedida!'; // Mensagem de sucesso
        validationMessage.style.color = '#32CD32'; // Cor verde para sucesso
    } else {
        inputElement.classList.remove('is-valid');
        inputElement.classList.add('is-invalid');
        validationMessage.textContent = inputElement.validationMessage.replace('Please fill out this field.', 'Por favor, plante essa semente de informação!'); // Adapta a mensagem padrão
        validationMessage.style.color = '#DC143C'; // Cor vermelha para erro
    }
}

nomeInput.addEventListener('input', () => validateInput(nomeInput));
emailInput.addEventListener('input', () => validateInput(emailInput));
const fileInput = document.getElementById('file-upload');
const fileNameSpan = document.getElementById('file-name');
const filePreview = document.getElementById('file-preview');

fileInput.addEventListener('change', () => {
    if (fileInput.files.length > 0) {
        const file = fileInput.files[0];
        fileNameSpan.textContent = file.name;

        // Limpa a pré-visualização anterior
        filePreview.innerHTML = '';

        // Pré-visualiza a imagem, se for uma
        if (file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const img = document.createElement('img');
                img.src = e.target.result;
                filePreview.appendChild(img);
            };
            reader.readAsDataURL(file);
        }
    } else {
        fileNameSpan.textContent = 'Nenhuma foto de campo ou cidade selecionada';
        filePreview.innerHTML = '';
    }
});
const ratingInputs = document.querySelectorAll('.star-rating input');
const ratingFeedback = document.getElementById('rating-feedback');

ratingInputs.forEach(input => {
    input.addEventListener('change', () => {
        const rating = input.value;
        let feedbackText = '';

        switch (rating) {
            case '1':
                feedbackText = 'Semente fraca. Podemos plantar algo melhor!';
                ratingFeedback.style.color = '#FF4500'; // Vermelho alaranjado
                break;
            case '2':
                feedbackText = 'Precisa de mais cultivo. Vamos adubar essa experiência!';
                ratingFeedback.style.color = '#FFA500'; // Laranja
                break;
            case '3':
                feedbackText = 'Em equilíbrio. Nem campo, nem cidade, mas um bom começo!';
                ratingFeedback.style.color = '#FFD700'; // Dourado
                break;
            case '4':
                feedbackText = 'Florescendo com a conexão! Uma bela paisagem!';
                ratingFeedback.style.color = '#32CD32'; // Verde limão
                break;
            case '5':
                feedbackText = 'Uma experiência exuberante! Campo e cidade em perfeita sintonia!';
                ratingFeedback.style.color = '#228B22'; // Verde floresta
                break;
            default:
                feedbackText = '';
        }
        ratingFeedback.textContent = feedbackText;
    });
});
