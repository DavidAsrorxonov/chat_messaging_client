import React, { useState } from "react";
import { useChatContext } from "stream-chat-react";
import { SearchIcon } from "lucide-react";

const ChannelSearch = () => {
  const [query, setQuery] = useState("");

  const onSearch = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
  };

  return (
    <div className="channel-search__container">
      <div className="channel-search__input__wrapper">
        <div className="channel-search__input__icon">
          <SearchIcon />
        </div>
        <input
          className="channel-search__input__text"
          type="text"
          placeholder="Search"
          value={query}
          onChange={onSearch}
        />
      </div>
    </div>
  );
};

export default ChannelSearch;
