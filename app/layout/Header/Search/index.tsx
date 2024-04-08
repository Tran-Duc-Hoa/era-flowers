"use client";
import { useRouter } from "next/navigation";
import { KeyboardEvent, useState } from "react";

const Search = () => {
  const router = useRouter();
  const [value, setValue] = useState("");

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      const url = value ? "/?q=" + value : "/";
      router.replace(url);
    }
  };

  const handleSearch = () => {
    const url = value ? "/?q=" + value : "/";
    router.replace(url);
  };

  return (
    <div className="input-group">
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="text"
        className="form-control"
        placeholder="Tìm kiếm sản phẩm"
        aria-label="Tìm kiếm sản phẩm"
        aria-describedby="search-input"
        onKeyDown={handleKeyDown}
      />
      <span
        className="input-group-text btn btn-primary"
        id="search-input"
        onClick={handleSearch}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-search"
          viewBox="0 0 16 16"
        >
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
        </svg>
      </span>
    </div>
  );
};

export default Search;
