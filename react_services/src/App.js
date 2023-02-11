import { PostService, UserService} from "./services";
import { useEffect } from "react";

function App() {
  // const [name, setName] = useState("John Doe");
  // const [avatar, setAvatar] = useState(false);
  // const [users, setUsers] = useState(false);

  // const addPost = data => {
  //   const headers = new Headers();
  //   // headers.append("Content-type", "application/json; charset=UTF-8");
  //   headers.append("Authorization", "Bearer 1234567890");

  //   const formData = new FormData();
  //   formData.append("userId", data.userId);
  //   formData.append("title", data.title);
  //   formData.append("body", data.body);

  //   fetch("https://jsonplaceholder.typicode.com/posts", {
  //     method: "POST",
  //     // body: JSON.stringify(data),
  //     body: formData,
  //     // headers: {
  //     //   "Content-type": "application/json; charset=UTF-8",
  //     //   "Authorization": "Bearer 1234567890"
  //     // }
  //     // or
  //     // headers: headers
  //     headers
  //   })
  //     .then(res => res.json())
  //     .then(data => console.log(data))
  //     .catch(err => console.log(err))
  // }

  useEffect(() => {
    // fetch('https://jsonplaceholder.typicode.com/users')
    //   .then(res => {
    //     if (res.ok && res.status == 200) {
    //       return res.json();
    //     }
    //   })
    //   .then(data => setUsers(data))
    //   .catch(err => console.log(err))

    // addPost({
    //   userId: 1,
    //   title: "Example title",
    //   body: "Example body"
    // })
    PostService.getPosts().then(res => console.log(res));
    PostService.getPostDetail(2).then(res => console.log(res));
    PostService.newPost({
      userId: 1,
      title: 'test',
      body: 'test'
    }).then(res => console.log(res));

    UserService.getUsers().then(res => console.log(res));
  }, [])

  // const submitHandle = (e) => {
  //   e.preventDefault();

  //   const data = {
  //     name,
  //     avatar
  //   }

  //   const formData = new FormData();
  //   formData.append("name", name);
  //   formData.append("avatar", avatar);

  //   fetch("https://jsonplaceholder.typicode.com/posts", {
  //     method: "POST",
  //     body: formData,
  //   })
  // }

  return (
    <>
      App
      {/* <form onSubmit={submitHandle}>
        <input type="text" name="name" value={name} onChange={e => setName(e.target.value)} /> <br />
        <input type="file" name="avatar" onChange={e => setAvatar(e.target.files[0])} /> <br />
        <button type="submit" disabled={!name || !avatar}>Kaydet</button>
      </form>
      <h1>User List</h1>
      <ul>
        {users && users.map(user => (
          <li key={user.id}>
            {user.name}
          </li>
        ))}
      </ul> */}
    </>
  );
}

export default App;
