import React, { useState } from 'react'
import searchIcon from "../../assets/img/searchIcon.svg"
import { ReactComponent as CloseIcon } from "../../assets/img/closeIcon.svg"
import { ReactComponent as NotificationIcon } from "../../assets/img/notificationIcon.svg"
import NoProfile from "../../assets/img/no-profile.svg"
// styles
import "./search.css"
const Search = ({ profile }) => {
  let { data, loading, error } = profile
  const [text, setText] = useState("")

  const showProfile = () => {
    if (loading) return (<>Loading...</>)
    if (error) return <p>error... {error.message}</p>;
    return (
      <>
        <img
          src={
            data.profile.avatar ? (data.profile.avatar)
              : (NoProfile)} alt={data.profile.fullName} className="img-profile" />
      </>
    )
  }

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
            <CloseIcon className="close-icon" />
          </button>
        ) : (null)
      }
      <button className="notification-icon">
        <NotificationIcon />
        {/* <img src={notificationIcon} alt="notificationIcon" /> */}
      </button>
      {showProfile()}
    </div>
  )
}

export default Search