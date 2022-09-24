import useSWR from "swr";
import { api_select, typeAPI } from "../services/api";
import React from "react";

export function useFetch_SWR<Data = any>(api_name: typeAPI, url: string) {
  const { axiosRequest } = api_select(api_name);
  const { data, error, mutate } = useSWR<Data>(url, async (url) => {
    const response = await axiosRequest.get(url);

    return response.data;
  });

  return { data, error, mutate };
}

type typeMethod = "post" | "get" | "put";

export function useFetch_no_SWR<Data = any>() {
  const [data, setData] = React.useState<Data>();
  const [error, setError] = React.useState<any>(null);
  const request = React.useCallback(
    async (api_name: typeAPI, method: typeMethod, url: string, options?) => {
      const { axiosRequest } = api_select(api_name);
      try {
        const response = await axiosRequest[method](url, options);
        setData(response.data);
      } catch (err: any) {
        setData(undefined);
        setError(err.message);
      }
    },
    []
  );
  return { data, error, request };
}
export function axios_fetch(api_name: typeAPI) {
  const { axiosRequest } = api_select(api_name);
  return axiosRequest;
}
