import React, { useEffect } from "react";
import { getQueryString } from "../../utils/utils";
import components from "./importList";

const Single = (props: any) => {
  let idx = Number(getQueryString(props.tid, "id"));
  if(!props.tid) {
    idx = Number(getQueryString(window.location.hash, "id"));
  }
  useEffect(() => {
  }, []);
  const Item = components[idx] || null;
  return <Item />;
};
export default Single;
