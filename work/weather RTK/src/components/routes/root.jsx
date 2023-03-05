import {Outlet, NavLink,} from 'react-router-dom';

export function Root() {
    return (
        <>
            <div id="sidebar">
                <NavLink  to="/weather">Weather App</NavLink>
            </div>
            <Outlet/>
        </>
    )
}