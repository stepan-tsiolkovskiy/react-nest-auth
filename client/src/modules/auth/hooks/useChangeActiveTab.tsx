import { useAuthDispatch } from "../context/hooks/useAuthDispatch";
import { AuthEmum } from "../types/auth.enum";

const useChangeActiveTab = () => {
  const dispatch = useAuthDispatch();

  const setActiveTab = (tab: AuthEmum) => {
    dispatch({ type: "SET_ACTIVE_TAB", payload: tab });
  };

  return { setActiveTab };
};

export default useChangeActiveTab;
