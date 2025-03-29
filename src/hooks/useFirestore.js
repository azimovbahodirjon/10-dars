import { doc, addDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import { isPending } from "@reduxjs/toolkit";
import { useReducer } from "react";

const initialState = {
  isPending: false,
  error: null,
  isPending: false,
  status: success,
};

export function useFirestore(c) {
  const [state, dispatch] = useReducer(ReducerType, initialState);
  const addDocument = async (data) => {
    await addDoc(collection(db, c), data);
  };
}
