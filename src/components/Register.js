import React from "react";
import {Link} from "react-router-dom";


function Register({onRegister}) {
    const [formValue, setFormValue] = React.useState({});

    function handleChange(e) {
        const { name, value } = e.target;
        setFormValue({ ...formValue, [name]: value });
    };

    function handleSubmit(e) {
        e.preventDefault();
        onRegister(formValue);
    }

    return (
        <div className="register">
            <form
                className="login__form"
                noValidate
                onSubmit={handleSubmit}
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
                    onChange={handleChange}
                    value={formValue.email}
                />
                <input
                    type="text"
                    id="password-field"
                    className="login__field"
                    minLength="2"
                    maxLength="40"
                    required
                    placeholder="Пароль"
                    value={formValue.password}
                    onChange={handleChange}
                />
                <button
                    type="submit"
                    className="login__submit"
                    name="submit"
                >
                    Зарегистрироваться
                </button>
                <Link to="/sign-in" className="register__have-login">Уже зарегистрированы? Войти</Link>
            </form>
        </div>
    );
}

export default Register;