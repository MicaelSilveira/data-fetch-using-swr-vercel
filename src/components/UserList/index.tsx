import React from "react";
import { Link } from "react-router-dom";
import { axios_fetch, useFetch_SWR } from "../../hooks/useFetch";
import { Spinner } from "../Spinner";
import styles from "./styles.module.scss";
export type Iusers = {
  id: number;
  name: string;
};
export const UserList = () => {
  const { data, error } = useFetch_SWR<Iusers[]>("USER_API", "/users");

  const handleUserClick = React.useCallback(async (id: number) => {
    axios_fetch("USER_API").put(`/users/${id}`, {
      id,
      name: "modified",
    });
  }, []);

  if (error) return <div>{error}</div>;
  if (!data) return <Spinner />;
  return (
    <div className={styles.UserList}>
      <ul className={styles.userUL}>
        {data?.map((i) => {
          return (
            <li key={i.id}>
              <div onClick={() => handleUserClick(i.id)}>
                <Link to={`/users/${i.id}`}>{i.name}</Link>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
