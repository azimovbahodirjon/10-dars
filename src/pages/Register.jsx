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
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url("./signup-bg.jpg")`,
      }}
    >
      <div>
        <img src="./logo.svg" className="mx-auto w-16" alt="" />
        <h2 className="text-center text-2xl font-semibold text-white md:text-4xl">
          Signup
        </h2>
        <form onSubmit={handleRegister} className="flex flex-col gap-2">
          <label>
            Display Name
            <input
              name="displayName"
              type="text"
              placeholder="Type here"
              className="input"
              required
            />
          </label>
          <label>
            Email
            <input
              name="email"
              type="email"
              placeholder="Type here"
              className="input"
              required
            />
          </label>
          <label>
            Password
            <input
              name="password"
              type="password"
              placeholder="Type here"
              className="input"
              required
            />
          </label>
          <div className="mt-5 flex flex-col gap-2 md:flex-row">
            {isPending && (
              <button className="btn btn-primary grow md:btn-md btn-sm">
                Loading...
              </button>
            )}
            {!isPending && (
              <button className="btn btn-primary grow md:btn-md btn-sm">
                SingUp
              </button>
            )}
            <button className="btn btn-secondary btn-sm grow md:btn-md disabled:bg-slate-400">
              Google
            </button>
          </div>
        </form>

        <h2 className="mt-4">
          If you have an account, please
          <Link to="/login" className="bg-white underline text-black ml-1">
            Login
          </Link>
        </h2>
      </div>
    </div>
  );
}

export default Register;
