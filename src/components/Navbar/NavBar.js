import React, { useContext, Fragment } from "react";
import NavButton from "./NavButton";
import { AuthContext } from "../Providers/AuthProvider";

const NavBar = (props) => {
  const [auth] = useContext(AuthContext);

  return (
    <nav
      style={{
        display: "flex",
        backgroundColor: "#AB0535",
        position: "fixed",
        width: "100%",
        zIndex: 9999,
        top: 0,
        left: 0,
        flexDirection: "row",
        height: "90px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          padding: "0em 1.2em",
        }}
      >
        <NavButton
          style={{ fontFamily: "Roboto Mono, monospace" }}
          to="/"
          label="Directory"
        />
      </div>
      <div
        style={{
          flex: 1,
          marginTop: "0em",
          display: "flex",
          flexDirection: "row",
          borderRadius: "70px 0px 0px 70px",
          background: "transparent",
          userSelect: "none",
          alignItems: "center",
          padding: "0em 1.2em",
          justifyContent: "flex-end",
        }}
      >
        {auth.token ? (
          <Fragment>
            <NavButton
              style={{ fontFamily: "Roboto Mono, monospace" }}
              to="/profile"
              label="profile"
            />
          </Fragment>
        ) : (
          <Fragment>
            <NavButton
              style={{ fontFamily: "Roboto Mono, monospace" }}
              to="/login"
              label="login"
            />
            {/* <NavButton
              style={{ fontFamily: "Roboto Mono, monospace" }}
              to="/register"
              label="register"
            /> */}
            <NavButton
              style={{ fontFamily: "Roboto Mono, monospace" }}
              to="/admin"
              label="admin"
            />
          </Fragment>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
