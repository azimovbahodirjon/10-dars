import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useState } from "react";
import { auth } from "../firebase/config";
import { login } from "../app/features/userSlice";
import { useDispatch } from "react-redux";

import { useFirestore } from "./useFirest";

export function useRegister() {
    const { addUser } = useFirestore("users");

    const dispatch = useDispatch();
    const [user, setUser] = useState(null);
    const [isPending, setIsPending] = useState(false);

    const register = async(email, displayName, password) => {
        setIsPending(true);
        try {
            const req = await createUserWithEmailAndPassword(auth, email, password);

            await updateProfile(auth.currentUser, {
                displayName,
                photoURL: "https://api.dicebear.com/9.x/notionists-neutral/svg?seed=" +
                    displayName,
            });

            const user = req.user;
            dispatch(login(user));
            addUser({
                displayName: user.displayName,
                email: user.email,
                isOnline: true,
                photoURL: user.photoURL,
            });
            setUser(user);
        } catch {} finally {
            setIsPending(false);
        }
    };
    return { user, isPending, register };
}