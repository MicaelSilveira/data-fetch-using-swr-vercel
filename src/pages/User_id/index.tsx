import styles from "./styles.module.scss";
import React from "react";
import { useParams } from "react-router-dom";
import { useFetch_SWR } from "../../hooks/useFetch";
import type { Iusers } from "../../components/UserList";
import { Spinner } from "../../components/Spinner";
export const UserDetails = () => {
  const { id } = useParams();
  const { data } = useFetch_SWR<Iusers>("USER_API", `/users/${id}`);
  if (!data) return <Spinner />;
  return (
    <div className={styles.UserDetails}>
      <div>
        <h3>{data.name}</h3>
      </div>
    </div>
  );
};
