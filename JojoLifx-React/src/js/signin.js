export const validarFormulario = (usuario, correo, contrasena, confirmarContrasena) => {
  const errores = [];

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

  if (contrasena && contrasena !== confirmarContrasena) {
    errores.push({
      campo: 'confirm-password',
      mensaje: 'Las contraseñas no coinciden.',
    });
  }

  return errores;
};