import { useSelector } from "react-redux";
import { userLogin } from "../../redux/dispatch";
import { saveStorage } from "../../storage";
import {NavLink} from "react-router-dom";

export function Header({setOpenModal} : {setOpenModal: (a:boolean) => void}) {
    const validUser = useSelector(state => state.reducerLogin);

    const handleClick = () => {
        setOpenModal(true);
        saveStorage('token', false);
        userLogin(false);
    }
    
    return(
            <header className="header">
                <nav className="nav">
                    <div className="nav_home">
                        <h2>Home</h2>
                    </div>
                    <div>
                        <NavLink to='/search'>
                            <button className="nav_login btn">Поиск</button>
                        </NavLink>
                        <button className="nav_login btn" onClick={handleClick} >{!validUser.login ? 'Войти' : 'Выйти' }</button>
                    </div>
                </nav>
            </header>
    )
}