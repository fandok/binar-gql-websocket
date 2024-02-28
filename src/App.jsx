import { Link, RouterProvider, createBrowserRouter } from "react-router-dom";

import GqlPage from "./gql";
import WebsocketPage from "./websocket";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Link to="gql">
          <div>GQL</div>
        </Link>
        <Link to="ws">
          <div>Websocket</div>
        </Link>
      </>
    ),
  },
  {
    path: "/gql",
    element: <GqlPage />,
  },
  {
    path: "/ws",
    element: <WebsocketPage />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
