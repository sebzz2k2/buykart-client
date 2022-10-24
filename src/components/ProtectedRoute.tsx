import React, { FC } from "react";
import { Route, Navigate } from "react-router-dom";

// const ProtectedRoute: FC = ({ component: Component, user, ...rest }) => {
//   return (
//     <Route
//       {...rest}
//       render={(props) => {
//         if (user) {
//           return <Component {...rest} {...props} />;
//         } else {
//           return (
//             <Navigate
//               to={{
//                 pathname: "/unauthorized",
//               }}
//             />
//           );
//         }
//       }}
//     />
//   );
// };

// export default ProtectedRoute;

export type ProtectedRouteProps = {
  isAuthenticated: boolean;
  authenticationPath: string;
  outlet: JSX.Element;
};

export default function ProtectedRoute({
  isAuthenticated,
  authenticationPath,
  outlet,
}: ProtectedRouteProps) {
  if (isAuthenticated) {
    return outlet;
  } else {
    return <Navigate to={{ pathname: authenticationPath }} />;
  }
}
