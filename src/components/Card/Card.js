import React from 'react'
// image and icons 
import { ReactComponent as PlaceholderIcon } from "../../assets/img/placeholderIcon.svg"
import { ReactComponent as TimeIcon } from "../../assets/img/timeIcon.svg"
import { ReactComponent as EditIcon } from "../../assets/img/editIcon.svg"
import { ReactComponent as DeleteIcon } from "../../assets/img/deleteIcon.svg"
import Image from "../../assets/img/image-round.png"
import NoProfile from "../../assets/img/no-profile.svg"
import { Dropdown } from 'react-bootstrap';
import moment from "moment";
// styles
import "./card.css"


const Card = ({ actionDelete, item }) => {
    let now = moment().format();
    let {
        assignee,
        tags,
        dueDate,
        pointEstimate,
        createdAt,
        status,
        name,
        id,
    }
        = { ...item }
    let timeTask = dueDate.split("T");
    timeTask.splice(1);
    let date = moment(timeTask.toString());
    let dateTask = date.format("D MMMM, YYYY");
    // console.log("now", now)
    //   functiions 
    const getColor = (name) => {
        return name == "IOS" || name == "ANDROID" ? name.toLowerCase() : "general"
    }
    const getPoint = (name) => {
        switch (name) {
            case "EIGHT":
                return 8
            case "FOUR":
                return 4
            case "ONE":
                return 1
            case "TWO":
                return 2
            case "ZERO":
                return 0
            default:
                return -1
        }
    }
    const getColorDate = () => {
        if (date.diff(now, "days") === 0) {
            if (date.diff(now, "hours") > 0) return "less";
            return "onTime";
        } else if (date.diff(now, "days") > 0 && date.diff(now, "days") <= 2) {
            return "less";
        } else {
            if (date.diff(now, "days") > 2) return "onTime";
            return "late";
        }
    }
    const dateNow = () => {
        if (date.diff(now, "days") === 0) {
            if (date.diff(now, "hours") > 0) return dateTask;
            return (dateTask = "TODAY");
        } else if (date.diff(now, "days") === -1) {
            return (dateTask = "Yesterday");
        }
        return dateTask;
    };
    return (
        <div className="card" key={id}>
            <div className="my-card-header">
                <div className="body--l title">{name}</div>
                <Dropdown className="modal-task-btn">
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        <PlaceholderIcon />
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1" disabled>
                            <EditIcon /> Edit
                        </Dropdown.Item>
                        <Dropdown.Item onClick={()=>actionDelete(item)}>
                            <DeleteIcon /> Delete
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                {/* 
                <button className="btn-card">
                </button> */}
            </div>
            <div className="card-task">
                <div className="body--m  title">{getPoint(pointEstimate)} Points</div>
                <button className={`btn-task ${getColorDate()}`} >
                    <TimeIcon className='hour-icon' />
                    <div className="body--m">{dateNow()}</div>
                </button>
            </div>
            <div className="list-tags">
                {tags?.map((item, key) => {
                    return (
                        <div key={key} className={`tag solid-label-${getColor(item)}`}>
                            {item}
                        </div>
                    )
                })}

            </div>
            <div className='card-reaction'>
                <img src={
                    assignee?.avatar ? (
                        assignee?.avatar
                    ) : NoProfile}
                />
                <div>

                </div>
            </div>
        </div>
    )
}

export default Card