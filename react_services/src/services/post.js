import { post, get, postJSON} from './request.js'

export const getPosts = () => get('/posts');
export const getPostDetail = id => get(`/posts/${id}`);
export const newPost = data => postJSON('/posts', data);