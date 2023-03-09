import React, { useState } from 'react'
import searchIcon from "../../assets/img/searchIcon.svg"
import closeIcon from "../../assets/img/closeIcon.svg"
import notificationIcon from "../../assets/img/notificationIcon.svg"

import "./search.css"
const Search = () => {
  const [text, setText] = useState("")
  return (
    <div className="search">
      <img src={searchIcon} className="iconSearch" alt="iconSearch" />
      <input
        value={text}
        type="text"
        placeholder='Search'
        onChange={(e) => setText(e.target.value)} />
      {
        text.length > 0 ? (
          <button className="close" onClick={() => setText("")}>
            <img src={closeIcon} alt="closeIcon" />
          </button>
        ) : (null)
      }
      <button className="notification">
        <img src={notificationIcon} alt="notificationIcon" />
      </button>
    </div>
  )
}

export default Search