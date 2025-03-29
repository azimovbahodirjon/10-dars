import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useState } from "react";
import { auth } from "../firebase/config";
import { useDispatch } from "react-redux";
import { login } from "../app/features/userSlice";
import toast from "react-hot-toast";

export const useRegister = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);

  const register = async (displayName, email, password) => {
    try {
      setIsPending(true);
      const req = await createUserWithEmailAndPassword(auth, email, password);

      await updateProfile(auth.currentUser, {
        displayName,
        photoURL: `https://api.dicebear.com/9.x/adventurer/svg?seed=${displayName}`,
      });

      const user = req.user;
      dispatch(login(user));
      setData(user);
      console.log(user);
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
    } finally {
      setIsPending(false);
    }
  };

  return { register, data, isPending };
};
