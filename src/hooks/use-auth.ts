import { useContext } from 'react';

import { AuthContext} from "../providers/authProvider.tsx";

const useAuth = () => {
  return useContext(AuthContext);
};

export default useAuth;
