import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Mountain from "./pages/Mountain.jsx";
import Equipment from "./pages/Equipment.jsx";
import { useEffect } from "react";

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
