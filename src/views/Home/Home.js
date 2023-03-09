import React from 'react'
import Card from '../../components/Card/Card.js'
import "./home.css"
const Home = () => {
  return (
    <div className="container">
      <div className="row p-right">
        <div className="column">
            <div className="body--l home-title">
              Working(03)
            </div>
          <div className="list-items">
            <Card />
            <Card yesterday={true} />
          </div>
        </div>
        <div className="column">
          <div className="body--l home-title">
            Working(03)
          </div>
          <div className="list-items">
            <Card />
            <Card />
            <Card />
            <Card yesterday={true} />
          </div>
        </div>
        <div className="column">
          <div className="body--l home-title">
            Working(03)
          </div>
          <div className="list-items">
            <Card />
            <Card yesterday={true} />
          </div>
        </div>

      </div>

    </div>
  )
}

export default Home