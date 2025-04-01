import { Link } from "react-router-dom";
import { useRegister } from "../hooks/useRegister";

function Register() {
  const { user, isPending, register } = useRegister();

  const handleRegister = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const email = formData.get("email");
    const displayName = formData.get("displayName");
    const password = formData.get("password");
    register(email, displayName, password);
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
          Register
        </h2>

        <form onSubmit={handleRegister} className="flex flex-col gap-4">
          <label className="text-white">
            Display Name
            <input
              name="displayName"
              type="text"
              placeholder="Type here"
              className="input w-full p-2 rounded-md mt-2 text-black"
              required
            />
          </label>

          <label className="text-white">
            Email
            <input
              name="email"
              type="email"
              placeholder="Type here"
              className="input w-full p-2 rounded-md mt-2 text-black"
              required
            />
          </label>

          <label className="text-white">
            Password
            <input
              name="password"
              type="password"
              placeholder="Type here"
              className="input w-full p-2 rounded-md mt-2 text-black"
              required
            />
          </label>

          <div className="mt-5 flex flex-col gap-2 md:flex-row">
            {isPending && (
              <button className="btn btn-primary grow md:btn-md btn-sm text-black">
                Loading...
              </button>
            )}
            {!isPending && (
              <button className="btn btn-primary grow md:btn-md btn-sm text-black">
                SignUp
              </button>
            )}
            <button className="btn btn-secondary btn-sm grow md:btn-md disabled:bg-slate-400">
              Google
            </button>
          </div>
        </form>

        <div className="mt-6 text-center">
          <h2 className="text-white">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-400 underline font-semibold">
              Login
            </Link>
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Register;
