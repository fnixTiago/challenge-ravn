import React from 'react'
import Card from '../../components/Card/Card.js'
import { useQuery } from "@apollo/client"
// styles
import "./home.css"

import { GET_TASK } from "../../graphql/getTask"
import ListCards from './ListCards.js'

const Home = () => {
  const working = useQuery(GET_TASK, { "variables": { status: 'BACKLOG' } });
  const completed = useQuery(GET_TASK, {
    variables: { status: 'DONE' }
  });
  const progress = useQuery(GET_TASK, {
    variables: { status: 'IN_PROGRESS' }
  });


  return (
    <div className="container">
      <div className="my-row p-right">
        <ListCards
        name = "Working"
        lista = {working}
        />
         <ListCards
        name = "In Progress"
        lista = {progress}
        />
         <ListCards
        name = "Completed"
        lista = {completed}
        />
      </div>

    </div>
  )
}

export default Home