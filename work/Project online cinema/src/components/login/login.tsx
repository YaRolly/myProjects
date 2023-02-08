import { userLogin } from "../../redux/dispatch";
import { USER } from "../../const";
import { useState } from "react";
import { saveStorage } from "../../storage";

export function Modal({ setOpenModal } : { setOpenModal: (a: boolean) => void }) {
    const [valueName, setValueName] = useState('');
    const [valuePassword, setValuePassword] = useState('');
    const [valid, setValid] = useState(false);
    const token = {
        login: valueName,
        password: valuePassword
    }

    const handleSubmit = (event: any) => {
        event.preventDefault();
        if (token.login === USER.NAME && token.password === USER.PASSWORD) {
            userLogin(token);
            saveStorage('token', token);
            setOpenModal(false);
        }
        setValid(true);
    }

    return (
        <div className='wrapper'>
            <div className='contentLogin'>
                <div className='exitTop'>
                    <button type="button" className='exit' onClick={() => setOpenModal(false)}>x</button>
                </div>
                <div className='containerLogin'>
                    <h1 className='title'>Авторизация</h1>

                    <form className='formAuth' onSubmit={handleSubmit}>
                        <input  type="text" onChange={(event) => setValueName(event.target.value)} placeholder="Логин"/>
                        <input type="text" onChange={(event) => setValuePassword(event.target.value)} placeholder="Пароль"/>
                        {valid && <p className="isValid">Неверный логин или пароль</p>}
                        <button type="submit">Войти</button>
                    </form>
                </div>
            </div>
        </div>
    )
}