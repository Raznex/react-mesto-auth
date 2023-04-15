import React from "react";

function Login() {
    return (
        <div className="login">
            <form
                className="login__form"
                noValidate
            >
                <h2 className="login__title">Вход</h2>
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
                    Войти
                </button>
            </form>
        </div>
    );
}

export default Login;