import logo from '../img/logo.png'
import user from '../img/user-1.jpg'
import { FaSearch, FaBookmark, FaComment } from 'react-icons/fa';

const Header = () => {
    return (
        <header className="header">
            <img src={logo} alt="logo" className="logo" />
            <form action="#" className="search">
                <input
                    type="text"
                    name="search"
                    id="search"
                    className="search__input"
                    placeholder="Search hotels"
                />
                <button type="submit" className="search__button">
                    <FaSearch className="search__icon" />
                </button>
            </form>
            <nav className="user-nav">
                <div className="user-nav__icon-box">
                    <FaBookmark className="user-nav__icon" />
                    <span className="user-nav__notification">9</span>
                </div>
                <div className="user-nav__icon-box">
                    <FaComment className="user-nav__icon" />
                    <span className="user-nav__notification">12</span>
                </div>
                <div className="user-nav__user">
                    <img src={user} alt="User" className="user-nav__user-photo" />
                    <span className="user-nav__user-name">Julian</span>
                </div>
            </nav>
        </header>
    )
}

export default Header
