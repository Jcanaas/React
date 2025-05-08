import React, { useState, useRef } from "react";

// Función para mostrar errores
export const mostrarError = (campo, mensaje, setErrores) => {
  setErrores((prev) => ({ ...prev, [campo]: mensaje }));
};

// Función para limpiar errores
export const limpiarErrores = (setErrores) => {
  setErrores({});
};

// Función para validar el formulario
export const validarFormulario = (formData, setErrores) => {
  const { usuario, correo, contrasena, confirmarContrasena } = formData;
  let hasError = false;

  limpiarErrores(setErrores);

  if (!usuario) {
    mostrarError("usuario", "Por favor completa este campo.", setErrores);
    hasError = true;
  }
  if (!correo) {
    mostrarError("correo", "Por favor completa este campo.", setErrores);
    hasError = true;
  }
  if (!contrasena) {
    mostrarError("contrasena", "Por favor completa este campo.", setErrores);
    hasError = true;
  }
  if (!confirmarContrasena) {
    mostrarError("confirmarContrasena", "Por favor completa este campo.", setErrores);
    hasError = true;
  }

  const contrasenaRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{7,}$/;
  if (contrasena && !contrasenaRegex.test(contrasena)) {
    mostrarError(
      "contrasena",
      "La contraseña debe tener al menos 7 caracteres, incluir una mayúscula, una minúscula y un número.",
      setErrores
    );
    hasError = true;
  }

  if (contrasena && confirmarContrasena && contrasena !== confirmarContrasena) {
    mostrarError(
      "confirmarContrasena",
      "Las contraseñas no coinciden. Por favor, verifica.",
      setErrores
    );
    hasError = true;
  }

  return hasError;
};

// Función para enviar el registro
export const enviarRegistro = async (formData) => {
  const { usuario, correo, contrasena } = formData;
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbzsORwapCu088hn1FW4aFLSxJas6lJp0VPK6nwJbWMhsS2T_AoGdiAt9jKXqUGaa6jfaQ/exec";

  try {
    const response = await fetch(scriptURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        accion: "signin",
        usuario,
        contrasena,
        correo,
      }),
      mode: "no-cors",
    });

    if (!response.ok) {
      throw new Error("Error al registrarse");
    }

    console.log("Solicitud enviada correctamente");
  } catch (error) {
    console.error("Error al registrarse:", error);
    throw error;
  }
};

const SigninForm = () => {
  const [formData, setFormData] = useState({
    usuario: "",
    correo: "",
    contrasena: "",
    confirmarContrasena: ""
  });

  const [errores, setErrores] = useState({});
  const formRef = useRef(null);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const hasError = validarFormulario(formData, setErrores);
    if (hasError) return;

    try {
      await enviarRegistro(formData);
      window.location.href = "login.html";
    } catch (error) {
      alert("Hubo un error al intentar registrarse.");
    }
  };

  return (
    <form id="formulario-signin" ref={formRef} onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usuario">Usuario:</label>
        <input id="usuario" type="text" value={formData.usuario} onChange={handleChange} />
        {errores.usuario && <div className="error-message">{errores.usuario}</div>}
      </div>
      <div>
        <label htmlFor="correo">Correo:</label>
        <input id="correo" type="email" value={formData.correo} onChange={handleChange} />
        {errores.correo && <div className="error-message">{errores.correo}</div>}
      </div>
      <div>
        <label htmlFor="contrasena">Contraseña:</label>
        <input id="contrasena" type="password" value={formData.contrasena} onChange={handleChange} />
        {errores.contrasena && <div className="error-message">{errores.contrasena}</div>}
      </div>
      <div>
        <label htmlFor="confirmarContrasena">Confirmar Contraseña:</label>
        <input id="confirmarContrasena" type="password" value={formData.confirmarContrasena} onChange={handleChange} />
        {errores.confirmarContrasena && <div className="error-message">{errores.confirmarContrasena}</div>}
      </div>
      <button type="submit">Registrarse</button>
    </form>
  );
};

export default SigninForm;
