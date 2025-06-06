import React, { useEffect } from "react";
import { useUser } from "../features/authentication/useUser";
import Spinner from "./Spinner";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Fullpage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-500);
  display: flex;
  align-items: center;
  justify-content: center;
`;
export default function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  //1. load autheticated users

  const { user, isLoading } = useUser();
  //while loading show spinner
  const isAuthenticated = user?.user?.role === "authenticated" ? true : false;
  useEffect(() => {
    if (!isAuthenticated && !isLoading) {
      navigate("/login");
    }
  }, [isAuthenticated, isLoading, navigate]);
  if (isLoading)
    return (
      <Fullpage>
        <Spinner></Spinner>
      </Fullpage>
    );

  //3. if user is noot autheticated ,direct user to login page

  //if user is autheticated ,redirect user to dashboard
  if (isAuthenticated) return children;
}
