import React from "react";
import { useFetch_no_SWR } from "../../hooks/useFetch";
import styles from "./styles.module.scss";

type Ipost = {
  title: string;
  body: string;
};
export const Home = () => {
  const { data, error, request } = useFetch_no_SWR<Ipost[]>();
  React.useEffect(() => {
    request("POST_API", "get", "/posts");
  }, []);
  if (error) return <div>Error</div>;
  if (!data) return <div>Loading</div>;
  return <div className={`${styles.home} animeLeft`}>Homepage</div>;
};
