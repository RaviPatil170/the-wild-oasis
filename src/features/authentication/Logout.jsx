import React from "react";
import ButtonIcon from "../../ui/ButtonIcon";
import { HiArrowRightOnRectangle } from "react-icons/hi2";
import { useLogout } from "./useLogout";
import Spinner from "../../ui/Spinner";
import SpinnerMini from "../../ui/SpinnerMini";
export default function Logout() {
  const { isLoading, logout } = useLogout();
  //if (isLoading) return <Spinner></Spinner>;
  return (
    <ButtonIcon disabled={isLoading} onClick={logout}>
      {!isLoading ? (
        <HiArrowRightOnRectangle></HiArrowRightOnRectangle>
      ) : (
        <SpinnerMini></SpinnerMini>
      )}
    </ButtonIcon>
  );
}
