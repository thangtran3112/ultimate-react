import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/FakeAuthContext";
import { useEffect } from "react";

function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  //only executed after element is rendered
  useEffect(
    function () {
      if (!isAuthenticated) navigate("/");
    },
    [isAuthenticated, navigate]
  );

  //redirected to root component "/", which wont change children JSX
  //if we do not check for isAuthenticated, children element would still be loaded,
  //before the useEffect() is rendered
  return isAuthenticated ? children : null;
}

export default ProtectedRoute;
