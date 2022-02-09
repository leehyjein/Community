import React from "react";
import { useSelector } from "react-redux";
import { apiKey } from "../shared/firebase";

const Permit = (props) => {
  const is_login = useSelector((state) => state.user.is_login);

  const _session_key = `firebase:authUser:${apiKey}:[DEFAULT]`; //session key 체크

  const is_session = sessionStorage.getItem(_session_key) ? true : false;

  if (is_session && is_login) {
    return <React.Fragment>{props.children}</React.Fragment>;
  }
  return null;
};

export default Permit;
