import { Helmet } from "react-helmet";

export default function Home() {
    return (
        <>
            <Helmet>
                <title> Anasayfa</title>
                <meta name="description" content="anasayfa description" />
            </Helmet>

            <div>
                Home page
            </div>
        </>
    )
}