import './Header.scss';
import { NavLink, Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className='header'>
            <div className='header__container'>
                <Link to={'/'}>
                    <img className='header__logo' src='http://localhost:8080/Assets/Logo/InStock-Logo_1x.png' alt='instock logo'/>
                </Link>
                <div className='header__options'>
                    <NavLink to={'/'} exact={true} className='header__link' activeClassName='header__active'>Warehouses</NavLink>
                    <NavLink to={'/inventory'} className='header__link' activeClassName='header__active'>Inventory</NavLink>
                </div>
            </div>
        </header>
    )
}

export default Header