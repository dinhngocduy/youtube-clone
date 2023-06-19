import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import { Counter } from "./features/counter/Counter";
import Navbar from "./features/Navbar/navbar";
import VideoFeedComponent from "./features/Dashboard/video-feed-component";
import { ENUM_PAGE } from "./libraries/ultils/enums/page";
import { useState } from "react";

function App() {
  const [searchText, setSearchText] = useState<string>("");

  const router = createBrowserRouter([
    {
      path: ENUM_PAGE.SHORTS,
      element: <Counter />,
    },
    {
      path: "/watch/:id",
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
      element: <Counter />,
    },
    {
      path: ENUM_PAGE.HISTORY,
      element: <Counter />,
    },
    {
      path: "/dashboard",
      element: <Counter />,
    },
    {
      path: "/",
      element: (
        <VideoFeedComponent
          setSearchText={setSearchText}
          searchText={searchText}
        />
      ),
    },
  ]);
  return (
    <div className="App">
      <Navbar setSearchText={setSearchText} />
      <div className="website-body">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
