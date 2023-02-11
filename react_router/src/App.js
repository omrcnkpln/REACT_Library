import { useRoutes, generatePath } from "react-router-dom";
import routes from "./routes";
import { url } from "./utils";

function App() {
  console.log(
    url("home.blog.post", {
      url: 1,
      test: 2
    })
  );

  return useRoutes(routes);
}

export default App;
