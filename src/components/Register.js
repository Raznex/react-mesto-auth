import React from "react";

function Register() {
    return (
        <div className="register">
            <form
                className="login__form"
                noValidate
            >
                <h2 className="login__title">Регистрация</h2>
                <input
                    type="email"
                    id="email-field"
                    className="login__field"
                    minLength="2"
                    maxLength="30"
                    required
                    placeholder="Email"
                />
                <input
                    type="text"
                    id="password-field"
                    className="login__field"
                    minLength="2"
                    maxLength="40"
                    required
                    placeholder="Пароль"
                />
                <button
                    type="submit"
                    className="login__submit"
                    name="submit"
                >
                    Зарегистрироваться
                </button>
                <a href="#" className="register__have-login">Уже зарегистрированы? Войти</a>
            </form>
        </div>
    );
}

export default Register;