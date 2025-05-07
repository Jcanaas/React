export const enviarLogin = async (usuario, password) => {
  const scriptURL =
    'https://script.google.com/macros/s/AKfycbzsORwapCu088hn1FW4aFLSxJas6lJp0VPK6nwJbWMhsS2T_AoGdiAt9jKXqUGaa6jfaQ/exec';

  try {
    const data = {
      accion: 'login',
      usuario,
      contrasena: password,
    };

    console.log('Datos enviados:', data);

    const response = await fetch(scriptURL, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'text/plain;charset=utf-8',
      },
    });

    if (!response.ok) {
      throw new Error('Error en la solicitud: ' + response.status);
    }

    const responseData = await response.json();
    return responseData; // Devuelve los datos de la respuesta
  } catch (error) {
    console.error('Error al enviar el formulario:', error);
    throw error;
  }
};

export const mostrarAlertaExito = (mensaje) => {
  alert(`Éxito: ${mensaje}`);
};

export const mostrarAlertaError = (mensaje) => {
  alert(`Error: ${mensaje}`);
};

document.addEventListener('DOMContentLoaded', function() {
    const loginData = {
        usuario: '',
        password: ''
    };

    const inputUsuario = document.querySelector('#usuario'); // Campo de usuario
    const inputPassword = document.querySelector('#password'); // Campo de contraseña
    const formulario = document.querySelector('#formulario'); // Formulario
    const btnSubmit = document.querySelector('#formulario button[type="submit"]'); // Botón de enviar
    const btnReset = document.querySelector('#formulario button[type="reset"]'); // Botón de reset
    const spinner = document.querySelector('#spinner'); // Spinner de carga

    // Eventos para validar los campos
    inputUsuario.addEventListener('input', validar);
    inputPassword.addEventListener('input', validar);

    // Evento para enviar el formulario
    formulario.addEventListener('submit', enviarLoginHandler);

    // Evento para resetear el formulario
    btnReset.addEventListener('click', function(e) {
        e.preventDefault();
        resetFormulario();
    });

    async function enviarLoginHandler(e) {
        e.preventDefault();

        spinner.classList.add('flex');
        spinner.classList.remove('hidden');

        try {
            const data = await enviarLogin(loginData.usuario, loginData.password);
            console.log('Respuesta del servidor:', data);
            if (data.success) {
                // Guardar el usuario y la contraseña en Local Storage
                localStorage.setItem("usuario", loginData.usuario);
                localStorage.setItem("password", loginData.password);

                mostrarAlertaExito(data.message);

                // Redirigir después de un tiempo (opcional)
                setTimeout(() => {
                    window.location.href = "user.html";
                }, 2000);
            } else {
                mostrarAlertaError(data.message);
            }
        } catch (error) {
            console.error('Error al enviar el formulario:', error);
            mostrarAlertaError('Hubo un error al iniciar sesión. Por favor, inténtalo nuevamente.');
        }
    }

    function validar(e) {
        const { id, value, name } = e.target;

        if (value.trim() === '') {
            mostrarAlerta(`El Campo ${id} es obligatorio`, e.target.parentElement);
            loginData[name] = ''; // Limpia el campo correspondiente en loginData
            comprobarFormulario();
            return;
        }

        limpiarAlerta(e.target.parentElement);
        loginData[name] = value.trim(); // Actualiza el valor en loginData
        comprobarFormulario();
    }

    function mostrarAlerta(mensaje, referencia) {
        limpiarAlerta(referencia);

        const error = document.createElement('P');
        error.textContent = mensaje;
        error.classList.add('bg-red-600', 'text-white', 'p-2', 'text-center');

        referencia.appendChild(error);
    }

    function limpiarAlerta(referencia) {
        const alerta = referencia.querySelector('.bg-red-600');
        if (alerta) {
            alerta.remove();
        }
    }

    function comprobarFormulario() {
        const camposVacios = Object.values(loginData).some(valor => valor.trim() === '');

        if (camposVacios) {
            btnSubmit.classList.add('opacity-50');
            btnSubmit.disabled = true;
            return;
        }

        btnSubmit.classList.remove('opacity-50');
        btnSubmit.disabled = false;
    }

    function resetFormulario() {
        loginData.usuario = '';
        loginData.password = '';

        formulario.reset();
        comprobarFormulario();
    }
});
