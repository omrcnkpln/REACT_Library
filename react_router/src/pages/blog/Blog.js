import { Link } from 'react-router-dom'
import { url } from '../../utils'
import { Helmet } from "react-helmet";

export default function Blog() {
    const posts = [
        {
            test: 1,
            title: "Post 1",
            url: "post-1"
        },
        {
            test: 2,
            title: "Post 2",
            url: "post-2-deneme"
        }
    ]

    return (
        <div>
            <Helmet>
                <title> Blog</title>
            </Helmet>

            <ul>
                {posts.map((post, index) => (
                    <li key={index}>
                        <Link to={url('home.blog.post', {
                            url: post.url,
                            test: post.test
                        })}>{post.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}
