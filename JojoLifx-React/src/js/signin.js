export const validarFormulario = (usuario, correo, contrasena, confirmarContrasena) => {
    const errores = [];
  
    // Validar que todos los campos estén completos
    if (!usuario) {
      errores.push({ campo: 'username', mensaje: 'Por favor completa este campo.' });
    }
    if (!correo) {
      errores.push({ campo: 'email', mensaje: 'Por favor completa este campo.' });
    }
    if (!contrasena) {
      errores.push({ campo: 'password', mensaje: 'Por favor completa este campo.' });
    }
    if (!confirmarContrasena) {
      errores.push({ campo: 'confirm-password', mensaje: 'Por favor completa este campo.' });
    }
  
    // Validar la contraseña
    const contrasenaRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{7,}$/;
    if (contrasena && !contrasenaRegex.test(contrasena)) {
      errores.push({
        campo: 'password',
        mensaje: 'La contraseña debe tener al menos 7 caracteres, incluir una mayúscula, una minúscula y un número.',
      });
    }
  
    // Validar que las contraseñas coincidan
    if (contrasena && confirmarContrasena && contrasena !== confirmarContrasena) {
      errores.push({
        campo: 'confirm-password',
        mensaje: 'Las contraseñas no coinciden. Por favor, verifica.',
      });
    }
  
    return errores;
  };
  
  export const enviarRegistro = async (usuario, correo, contrasena) => {
    const scriptURL =
      'https://script.google.com/macros/s/AKfycbzsORwapCu088hn1FW4aFLSxJas6lJp0VPK6nwJbWMhsS2T_AoGdiAt9jKXqUGaa6jfaQ/exec';
  
    try {
      const response = await fetch(scriptURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          accion: 'signin',
          usuario: usuario,
          contrasena: contrasena,
          correo: correo,
        }),
      });
  
      if (!response.ok) {
        throw new Error('Error al registrarse');
      }
  
      return await response.json();
    } catch (error) {
      console.error('Error al registrarse:', error);
      throw error;
    }
  };
  
  export const mostrarErrores = (errores) => {
    errores.forEach(({ campo, mensaje }) => {
      const campoElemento = document.getElementById(campo);
      if (campoElemento) {
        const error = document.createElement('div');
        error.className = 'error-message';
        error.textContent = mensaje;
        campoElemento.parentNode.insertBefore(error, campoElemento.nextSibling);
      }
    });
  };