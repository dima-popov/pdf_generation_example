import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Main.js";
import PDFView from "./PDFView.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/pdf",
    element: <PDFView />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
