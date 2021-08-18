import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import { checkSession, login } from "./sessionSlice";

const useSession = () => {
  const username = useSelector((state: RootState) => state.authentication.username);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkSession());
  }, []);

  const handleLogin = () => {
    if (username) return;

    const newUsername = window.prompt("Please enter your username before using the app.");

    if (!newUsername) return;

    dispatch(login(newUsername));
  };

  return [username, { login: handleLogin }] as const;
};

export default useSession;
