import Header from './Header';
import Footer from './Footer';
import { useAuth } from '../context';

export default function Home() {
    const { user } = useAuth();

    return (
        <>
            <Header />
            App
            {(user && <h1>{user.name} {user.surname}</h1>) || <h1>Giriş Yapınız</h1>}
            <Footer />
        </>
    )
}