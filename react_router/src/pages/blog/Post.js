import { useParams } from 'react-router-dom';
import { Helmet } from "react-helmet";

export default function Post() {
    const { url, test } = useParams();
    console.log(url, test);

    return (
        <div>
            <Helmet>
                <title>{url} Detay</title>
            </Helmet>

            Blog Post
            <br />
            {url} - {test}
        </div>
    );
}