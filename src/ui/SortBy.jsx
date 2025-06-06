import React from "react";
import Select from "./Select";
import { useSearchParams } from "react-router-dom";

export default function SortBy({ options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const SortBy = searchParams.get("SortBy") || "";
  function handleChange(e) {
    searchParams.set("SortBy", e.target.value);
    setSearchParams(searchParams);
  }
  return (
    <Select
      options={options}
      type="white"
      onChange={handleChange}
      value={SortBy}
    ></Select>
  );
}
