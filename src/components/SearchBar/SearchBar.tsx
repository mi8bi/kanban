import { useState } from "react";
import SearchIcon from "@/assets/search.svg?react";
import styles from "./SearchBar.module.css";

export const SearchBar = () => {
  const [query, setQuery] = useState("");

  return (
    <div className={styles.wrapper}>
      <SearchIcon className={styles.icon} />
      <input
        type="text"
        className={styles.input}
        placeholder="Search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
};
