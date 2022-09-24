import styles from "./style.module.scss";
import React from "react";
import { UserList } from "../../components/UserList";
export const Users = () => {
  return (
    <div className={`${styles.users} animeLeft`}>
      <UserList />
    </div>
  );
};
