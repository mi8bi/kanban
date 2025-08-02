import React, { useState } from "react";
import SearchIcon from "@/assets/search.svg?react";
import styles from "./SearchBar.module.css";

type SearchBarProps = {
  placeholder?: string;
};

export const SearchBar: React.FC<SearchBarProps> = ({ placeholder }) => {
  const [query, setQuery] = useState("");

  return (
    <div className={styles.wrapper}>
      <SearchIcon className={styles.icon} />
      <input
        type="text"
        className={styles.input}
        placeholder={placeholder || "Search..."}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
};
