import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Modal from "../../Modal/Modal";
import styled from 'styled-components';
// images
import { ReactComponent as DashboardIcon } from "./../../../assets/img/dashboardIcon.svg"
import { ReactComponent as TaskIcon } from "./../../../assets/img/taskIcon.svg"
import { ReactComponent as AddIcon } from "./../../../assets/img/addIcon.svg"
// styles
import "./navheader.css"

const Backdrop = styled("div")`
position: fixed;
z-index: 1040;
top: 0;
bottom: 0;
left: 0;
right: 0;
background-color: #000;
opacity: 0.5;
`;
// we use some pseudo random coords so nested modals
// don't sit right on top of each other.
const RandomlyPositionedModal = styled(Modal)`
  position: fixed;
  min-width: 572px;
  max-width: auto;
  min-height: 184px;
  max-height: auto;
  z-index: 1040;
  top: 33%;
  left: 33%;
  border: 1px solid #e5e5e5;
  background-color: white;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
  padding: 20px;
`;


const NavHeader = () => {
  const [show, setShow] = useState(false)
  const renderBackdrop = (props) => <Backdrop {...props} />;
  const useCurrentPath = (path) => {
    const location = useLocation()
    return location.pathname === path ? "active-b" : ""
  }
  const handleOpen = () => {
    console.log("open")
    setShow(true)
  }
  const handleClose = () => {
    setShow(false)
  }
  const handleSuccess = () => {
    setShow(false)
  }
  return (
    <>
      {/* init modal add */}
      <Modal onClose={handleClose} show={show}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
          deserunt corrupti, ut fugit magni qui quasi nisi amet repellendus non
          fuga omnis a sed impedit explicabo accusantium nihil doloremque
          consequuntur.
        </Modal>
      {/* end modal add */}
      <div className="nav">
        <div>
          <Link to="/" className={`nav-icon ${useCurrentPath("/")}`}>
            <DashboardIcon />
          </Link>
          <Link to="/task" className={`nav-icon ${useCurrentPath("/task")}`}>
            <TaskIcon />
          </Link>
        </div>
        <button className="btn-add" onClick={handleOpen}>
          <AddIcon />
        </button>

      </div>

    </>
  )
}

export default NavHeader