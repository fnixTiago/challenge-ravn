import Sidebar from "./components/layouts/Sidebar/Sidebar.js"
import NavHeader from "./components/layouts/NavHeader/NavHeader.js"
import Content from "./components/Content/Index.js"
import Search from "./components/Search/Search.js"
import { Routes, Route } from 'react-router-dom';
// views
import Home from "./views/Home/Home.js"
import Task from "./views/Task/Task.js"
import { useQuery } from "@apollo/client"
// queryes
import { GET_STATUS_TASK } from "./graphql/getStatusTask";
import { GET_PROFILE } from "./graphql/getProfile";
// styles
import "./App.css"
const stimate = [
  {
    name: "EIGHT",
    value: 8
  },
  {
    name: "FOUR",
    value: 4
  },
  {
    name: "ONE",
    value: 1
  },
  {
    name: "TWO",
    value: 2
  },
  {
    name: "ZERO",
    value: 0
  },
]
function App() {
  const status = useQuery(GET_STATUS_TASK);
  const profile = useQuery(GET_PROFILE);
  // console.log("status", status)
  return (
    <div className="App">

      <Sidebar />
      <Content>
        <Search profile={profile} />
        <NavHeader statusTask={status} stimate = {stimate} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/task" element={<Task />} />
        </Routes>
      </Content>
    </div>
  );
}

export default App;
