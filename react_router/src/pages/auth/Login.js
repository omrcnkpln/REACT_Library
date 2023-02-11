import { useAuth } from "../../context/AuthContext";
import { useNavigate, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function Login() {
    const navigate = useNavigate();
    const location = useLocation();
    const { setUser } = useAuth();

    const loginHandle = () => {
        setUser({ id: 1, name: "John", surname: "Doe" });
        navigate(location?.state?.return_url || "/", { replace: true, state: { name: "omrcnkpln" } });
    }

    return (
        <div>
            <Helmet>
                <title>Profile</title>
            </Helmet>

            login page <br />
            <button onClick={loginHandle}>Giriş</button>
        </div>
    )
}