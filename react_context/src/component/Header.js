import SwitchLanguage from "./SwitchLanguage";
import SwitchTheme from "./SwitchTheme";
import { useAuth } from "../context";

export default function Header() {
    const { user, dispatch } = useAuth();

    const login = () => {
        dispatch({ type: "LOGIN", payload: { name: "Omer Can", surname: "KAPLAN", id: 1 } });
    }

    const logout = () => {
        dispatch({ type: "LOGOUT" })
    }

    return (
        <header>
            HEADER <br />
            {(user && <button onClick={logout}>Çıkış Yap</button>) || (<button onClick={login}>Giriş Yap</button>)}

            <hr />
            <SwitchTheme />
            <SwitchLanguage />
        </header>
    )
}