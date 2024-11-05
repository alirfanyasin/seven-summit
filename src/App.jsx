import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useEffect } from "react";

import Home from "./pages/Home";
import Mountain from "./pages/Mountain.jsx";
import Equipment from "./pages/Equipment.jsx";
import Community from "./pages/Community.jsx";
import Tips from "./pages/Tips.jsx";
import TipsDetail from "./pages/TipsDetail.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/gunung",
    element: <Mountain />,
  },
  {
    path: "/perlengkapan",
    element: <Equipment />,
  },
  {
    path: "/tips",
    element: <Tips />,
  },
  {
    path: "/tips/:id",
    element: <TipsDetail />,
  },
  {
    path: "/komunitas",
    element: <Community />,
  },
]);

function App() {
  useEffect(() => {
    window.HSStaticMethods.autoInit();
  }, []);

  // document.addEventListener("window", () => {
  //   window.HSStaticMethods.autoInit();
  // });

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
