import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    navigate("/");
  };

  return (
    <div
      className="grid h-screen w-full place-items-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://picsum.photos/1920/1080')`,
      }}
    >
      <div className="w-full max-w-sm p-6 bg-gray-900 bg-opacity-75 rounded-lg shadow-lg">
        <img src="./logo.svg" className="mx-auto w-16" alt="Logo" />
        <h2 className="text-center text-2xl font-semibold text-white md:text-4xl mb-4">
          Login
        </h2>

        <form className="flex flex-col gap-4" onSubmit={handleLogin}>
          <label className="text-white">
            Email
            <input
              type="email"
              placeholder="Type here"
              className="w-full p-2 rounded-md mt-2 text-white placeholder:text-gray-400 bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
              required
            />
          </label>

          <label className="text-white">
            Password
            <input
              type="password"
              placeholder="Type here"
              className="w-full p-2 rounded-md mt-2 text-white placeholder:text-gray-400 bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
              required
            />
          </label>

          <div className="mt-5 flex flex-col gap-2 md:flex-row">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Login
            </button>
            <button
              type="button"
              className="w-full bg-gray-600 text-white py-2 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
            >
              Google
            </button>
          </div>
        </form>

        <h2 className="mt-4 text-white text-center">
          If you don't have an account, please{" "}
          <Link to="/register" className="text-blue-400 underline ml-1">
            Register
          </Link>
        </h2>
      </div>
    </div>
  );
}

export default Login;
