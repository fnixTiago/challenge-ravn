import React from 'react'
// image and icons 
import { ReactComponent as PlaceholderIcon } from "../../assets/img/placeholderIcon.svg"
import { ReactComponent as TimeIcon } from "../../assets/img/timeIcon.svg"
import Image from "../../assets/img/image-round.png"
// styles
import "./card.css"
const Card = (props) => {
    let { yesterday } = props
    return (
        <div className="card">
            <div className="card-header">
                <div className="body--l title">titulo</div>
                <button className="btn-card">
                    <PlaceholderIcon />
                </button>
            </div>
            <div className="card-task">
                <div className="body--m  title">5 Points</div>
                <button className={`btn-task ${yesterday ? "yesterday" : ""}`} >
                    <TimeIcon className='hour-icon' />
                    <div className="body--m">TODAY</div>
                </button>
            </div>
            <div className="list-tags">
                <div className="tag solid-label-green">
                    IOS APP
                </div>
                <div className="tag solid-label-yellow">
                    ANDROID
                </div>
                <div className="tag solid-label-orange">
                    GOOGLE
                </div>
                <div className="tag solid-label-blue">
                    TWITTER
                </div>
            </div>
            <div className='card-reaction'>
                <img src={Image} />
                <div>
                    
                </div>
            </div>
        </div>
    )
}

export default Card