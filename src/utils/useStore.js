import { useSelector } from "react-redux";

export function useStore() {
  // auth
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const token = useSelector((state) => state.auth.token);
  const user = useSelector((state) => state.auth.user);

  // data
  const data = useSelector((state) => state.data.data);

  // ui
  const ui = useSelector((state) => state.ui.toggle);

  return { isAuthenticated, user, token, data, ui };
}
