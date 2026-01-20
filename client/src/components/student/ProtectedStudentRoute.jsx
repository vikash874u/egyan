import { Navigate } from "react-router-dom";

const ProtectedStudentRoute = ({ children }) => {
  const student = localStorage.getItem("student");

  if (!student) {
    return <Navigate to="/studentlogin" replace />;
  }

  return children;
};

export default ProtectedStudentRoute;
