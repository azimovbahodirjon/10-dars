import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { auth } from "../firebase/config";
import { login as _login } from "../app/features/userSlice";
import toast from "react-hot-toast";

export const useLogin = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);

  const login = async (email, password) => {
    console.log(email, password);
    try {
      setIsPending(true);
      const req = await signInWithEmailAndPassword(auth, email, password);

      const user = req.user;
      dispatch(_login(user));
      setData(user);
      console.log(user);
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
    } finally {
      setIsPending(false);
    }
  };

  return { login, data, isPending };
};
