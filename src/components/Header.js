import logo from "../images/header__title.svg";
import { Link, Routes, Route } from 'react-router-dom';

function Header({email}) {
    return (
        <header className="header">
            <img src={logo} alt="Место" className="header__logo" />
            <div className="header__condition">
            <h2 className="header__email">{email}</h2>
            <Routes>
                <Route path="/" element={<Link  to="/sign-in" className="header__link">Выйти</Link>} />
                <Route path="/mesto-react" element={<Link  to="/sign-in" className="header__link">Выйти</Link>} />
                <Route path="/sign-in" element={<Link to="/sign-up" className="header__link">Регистрация</Link>} />
                <Route path="/sign-up" element={<Link to="/sign-in" className="header__link">Войти</Link>} />
            </Routes>
            </div>
        </header>
    );
}

export default Header;