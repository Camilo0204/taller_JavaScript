const numeroSecreto = Math.floor(Math.random() * 100) + 1;
let intentos = 0;

function adivinarNumero() {
    const numeroUsuario = parseInt(document.getElementById('numeroAdivinar').value);

    if (isNaN(numeroUsuario) || numeroUsuario < 1 || numeroUsuario > 100) {
        alert('Por favor, ingresa un número válido entre 1 y 100.');
        return;
            }

    intentos++;

    if (numeroUsuario === numeroSecreto) {
        const mensaje = `¡Felicidades! Adivinaste el número secreto ${numeroSecreto} en ${intentos} intentos.`;
        alert(mensaje);
                
        } else if (numeroUsuario < numeroSecreto) {
            document.getElementById('resultado').textContent = 'Más alto';
        } else {
            document.getElementById('resultado').textContent = 'Más bajo';
        }
    }

        