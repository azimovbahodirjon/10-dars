import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import ProtectedRoutes from "./components/ProtectedRouters";
import MainLayouts from "./layouts/MainLayouts";
import Home from "./pages/Home";
import Create from "./pages/Create";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { useSelector } from "react-redux";

function App() {
  const { user } = useSelector((store) => store.user); // Redux orqali foydalanuvchi ma'lumotlarini olish

  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoutes user={user}>
          {" "}
          {/* Foydalanuvchi tizimga kirganini tekshirish */}
          <MainLayouts /> {/* Layout komponenti */}
        </ProtectedRoutes>
      ),
      children: [
        {
          index: true,
          element: <Home />, // Home sahifasi
        },
        {
          path: "/create",
          element: <Create />, // Create sahifasi
        },
      ],
    },
    {
      path: "/login",
      element: user ? <Navigate to="/" /> : <Login />, // Agar foydalanuvchi tizimga kirgan bo'lsa, home sahifasiga yo'naltiriladi
    },
    {
      path: "/register", // "/register" yo'nalishi
      element: user ? <Navigate to="/" /> : <Register />, // Agar foydalanuvchi tizimga kirgan bo'lsa, home sahifasiga yo'naltiriladi
    },
  ]);

  return <RouterProvider router={routes} />;
}

export default App;
