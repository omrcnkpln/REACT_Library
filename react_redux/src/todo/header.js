import { useSelector } from "react-redux";
import { loginHandle, logoutHandle } from "../utils";

export default function Header() {

    //distraction
    const { user } = useSelector(state => state.auth);

    const login = user => {
        loginHandle(user)
    }

    return (
        <>
            <header className="header">
                <h2>Todo</h2>
                {!user && (
                    <nav>
                        <button onClick={() => login({ id: 1, username: "omrcnkpln" })}>omrcnkpln</button>
                        <button onClick={() => login({ id: 2, username: "test" })}>test</button>
                    </nav>
                )}
                {user && (
                    <nav>
                        <button onClick={logoutHandle}>Logout</button>
                    </nav>
                )}
            </header>
        </>
    );
}