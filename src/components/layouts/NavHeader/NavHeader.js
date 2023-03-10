import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Modal, Dropdown } from "react-bootstrap"
// import ButtonIcon from '../../ButtonIcon/ButtonIcon';
import { useQuery, useMutation } from "@apollo/client"
import moment from "moment";
// images
import { ReactComponent as DashboardIcon } from "./../../../assets/img/dashboardIcon.svg"
import { ReactComponent as TaskIcon } from "./../../../assets/img/taskIcon.svg"
import { ReactComponent as AddIcon } from "./../../../assets/img/addIcon.svg"
import { ReactComponent as EstimateIcon } from "./../../../assets/img/estimateIcon.svg"
import { ReactComponent as AssigneeIcon } from "./../../../assets/img/assigneeIcon.svg"
import { ReactComponent as LabelIcon } from "./../../../assets/img/labelIcon.svg"
import { ReactComponent as DateIcon } from "./../../../assets/img/dateIcon.svg"
import NoProfile from "./../../../assets/img/no-profile.svg"
// styles
import "./navheader.css"
// graphql
import { GET_USERS } from '../../../graphql/getUsers';
import { CREATE_TASK_MUTATION } from '../../../graphql/createTaskMutation';


const NavHeader = ({ statusTask, stimate }) => {
  const [createTask, resultTask] = useMutation(CREATE_TASK_MUTATION);
  const [assignee, setAssignee] = useState(null)
  const [dueDate, setDueDate] = useState("")
  const [name, setName] = useState("")
  const [pointEstimate, setPointEstimate] = useState(null)
  const [tags, setTags] = useState("")

  const [showModal, setShowModal] = useState(false)
  const location = useLocation()
  const { data, error, loading } = useQuery(GET_USERS);
  const useCurrentPath = (path) => {
    return location.pathname === path ? "active-b" : ""
  }
  // modal
  const handleOpen = () => {
    setShowModal(true)
  }
  const handleClose = () => {
    setShowModal(false)
  }
  const showUsers = () => {
    if (loading) return (<>Load users...</>)
    if (error) return (<>Error {error.message}</>)
    return (<>
      {data && data?.users.map((item, key) =>
        <Dropdown.Item key={key} onClick={() => { setAssignee(item) }} >
          <img
            src={
              item.avatar ? (item.avatar)
                : (NoProfile)} alt={item.fullName} className="item-avatar" />
          {item.fullName}
        </Dropdown.Item>
      )}
    </>
    )
  }
  const handleDate = (e) => {
    e.preventDefault();
    // console.log("evento", e.target.value)
    let time = moment(e.target.value, "YYYY-MM-DD")
      .format()
    setDueDate(time)

  }
  const handleSubmit = (e) => {
    e.preventDefault();
    let input = {
      assigneeId: assignee.id,
      dueDate: dueDate,
      name: name,
      pointEstimate: pointEstimate.name,
      status: "BACKLOG",
      tags: [tags],
    }
    console.log("subbbb", input)
    createTask({
      variables: {
        input
      }
    })
    setAssignee(null)
    setDueDate("")
    setName("")
    setPointEstimate(null)
    setTags("")
    let { data, loading, error } = resultTask;

    if (error === undefined) {
      setShowModal(false)
      setTimeout(function () {
        window.location.reload();
      }, 1000);
      // window.location.reload();
    }

  }
  return (
    <>

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

      {/* init modal add */}
      <Modal
        show={showModal}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        className="modal-task"
      >
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="modal-task-content">
            <input
              required
              placeholder='Task Title'
              value={name} onChange={e => setName(e.target.value)} />
            <div className="modal-task-body">
              <Dropdown className="modal-task-btn">
                <Dropdown.Toggle id="dropdown-basic">
                  <EstimateIcon /> {
                    pointEstimate ?
                      pointEstimate.value + " Points" :
                      "Estimate"}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <div className="menu-title">Estimate</div>
                  {
                    stimate.map((item, key) =>
                      <Dropdown.Item key={key} onClick={() => setPointEstimate(item)}>
                        <EstimateIcon /> {item.value} Points
                      </Dropdown.Item>
                    )
                  }
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown className="modal-task-btn">
                <Dropdown.Toggle id="dropdown-basic">
                  {assignee ? (<>
                    <img
                      src={
                        assignee.avatar ? (assignee.avatar)
                          : (NoProfile)} alt={assignee.fullName} className="item-avatar" />
                    {assignee.fullName}
                  </>
                  ) : (
                    <>
                      <AssigneeIcon />
                      Assignee
                    </>
                  )
                  }

                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <div className="menu-title">Assign To...</div>
                  {showUsers()}
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown className="modal-task-btn">
                <Dropdown.Toggle id="dropdown-basic">
                  {tags ? (<>
                    {tags}
                  </>
                  ) : (<>
                    <LabelIcon />
                    Label
                  </>

                  )
                  }
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <div className="menu-title">Tag title</div>
                  {
                    ["ANDROID", "IOS", "NODE_JS", "RAILS", "REACT"].map((item, key) =>
                      <Dropdown.Item key={key} onClick={() =>
                        setTags(item)
                      }>
                        {item}
                      </Dropdown.Item>
                    )
                  }
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown className="modal-task-btn">
                <Dropdown.Toggle id="dropdown-basic">
                  {/* <DateIcon />  */}
                  {/* Due Date */}
                  <input
                    type="date"
                    data-date="" data-date-format="MMMM DD, YYYY"
                    onChange={(e) => handleDate(e)}
                  />
                </Dropdown.Toggle>
              </Dropdown>

            </div>
            <div className="modal-task-footer">
              <button className="my-btn btn-secondary" onClick={() => handleClose()}>
                Cancel
              </button>

              <button type='submit' disabled={name.length < 0} className={`my-btn btn-primary active`}>
                Create
              </button>
            </div>
          </div>

        </form>

      </Modal>
      {/* end modal add */}
    </>
  )
}

export default NavHeader