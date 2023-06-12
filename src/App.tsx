import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import { Counter } from "./features/counter/Counter";
import Navbar from "./features/Navbar/navbar";
import VideoFeedComponent from "./features/Dashboard/video-feed-component";
import { ENUM_PAGE } from "./libraries/ultils/enums/page";

function App() {
  const router = createBrowserRouter([
    {
      path: ENUM_PAGE.SHORTS,
      element: <Counter />,
    },
    {
      path: "/video/:id",
      element: <Counter />,
    },
    {
      path: ENUM_PAGE.SUBSCRIPTION,
      element: <Counter />,
    },
    {
      path: "/search/:searchTerm",
      element: <Counter />,
    },
    {
      path: ENUM_PAGE.LIBRARY,
      element: <VideoFeedComponent />,
    },
    {
      path: ENUM_PAGE.HISTORY,
      element: <VideoFeedComponent />,
    },
    {
      path: "/dashboard",
      element: <VideoFeedComponent />,
    },
    {
      path: "/",
      element: <VideoFeedComponent />,
    },
  ]);
  return (
    <div className="App">
      <Navbar />
      <div className="website-body">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
