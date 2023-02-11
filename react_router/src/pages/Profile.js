import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function Profile() {

    const { setUser, user } = useAuth();

    const logoutHandle = () => {
        setUser(false);
    }

    return (
        <div>
            <Helmet>
                <title>Profile</title>
            </Helmet>

            Profile sayfası <br />

            {!user && <Link to="/auth/login">Giriş Yap</Link>}

            {user && <button onClick={logoutHandle}>Logout</button>}
        </div>
    )
}