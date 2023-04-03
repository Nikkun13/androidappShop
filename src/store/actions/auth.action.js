import { SIGN_UP_URL } from "../../constants/database";

export const SIGN_UP = "SIGN_UP";
export const SIGN_UP_START = "SIGN_UP_START";
export const SIGN_UP_FAILED = "SIGN_UP_FAILED";
//AGREGAR LOGIN = 'LOGIN' y despues abajo todo lo relacionado a eso.

export const signUp = (email, password) => {
  return async (dispacth) => {
    try {
      dispacth({
        type: "SIGN_UP_START",
      });
      const response = await fetch(SIGN_UP_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
          returnSecureToken: true,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        const errorResData = await response.json();
        const errorId = errorResData.error.message;

        let message = 'No se ha podido registrar';
        if (errorId === 'EMAIL_EXISTS') message = 'Este email ya está registrado'
        if (errorId === 'OPERATION_NOT_ALLOWED') message = 'Operación no permitida'
        if (errorId === 'TOO_MANY_ATTEMPTS_TRY_LATER') message = 'Has realizado muchos intentos, prueba más tarde'
        throw new Error(message);
      }

      dispacth({
        type: SIGN_UP,
        token: data.idToken,
        userId: data.localId,
      });
    } catch (error) {
      dispacth({
        type: "SIGN_UP_FAILED",
      });
      alert(error);
      console.error(error);
    }
  };
};
