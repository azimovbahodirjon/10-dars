import React from "react";
import FormInput from "../components/FormInput";
import { useRegister } from "../hooks/useRegister";

function Register() {
  const { re } = useRegister();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const displayName = formData.get("displayName");
    const email = formData.get("email");
    const password = formData.get("password");

    login(displayName, email, password);
  };
  return (
    <main>
      <section className="w-full grid place-items-center h-screen">
        <form className="flex w-full max-w-96 flex-col">
          <h2 className="text-3xl text-center font-bold mb-5">Register</h2>
          <FormInput label="Display Name:" name="displayName" type="text" />
          <FormInput label="Email:" name="email" type="email" />
          <FormInput label="Password:" name="passowrd" type="password" />
          <FormInput
            label="Confirm password:"
            name="passowrd"
            type="password"
          />
          <div className="flex gap-2 mt-5">
            <button className="btn btn-primary grow">Register</button>
            <button className="btn btn-secondary grow">Google</button>
          </div>
        </form>
      </section>
    </main>
  );
}

export default Register;
