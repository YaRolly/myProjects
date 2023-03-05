import {NavLink} from "react-router-dom";

export function Help() {
    return (
        <div className="help">
            <p>Приложение Weather App предоставляет основную информацию о погоде на главном экране.
                Есть также возможность добавлять несколько городов в избранное.</p>
            <NavLink to="/">Root</NavLink>
        </div>
    );
}