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
      path: "/channel/:id",
      element: <Counter />,
    },
    {
      path: "/search/:searchTerm",
      element: <Counter />,
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
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
