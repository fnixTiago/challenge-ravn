import Sidebar from "./components/layouts/Sidebar/Sidebar.js"
import NavHeader from "./components/layouts/NavHeader/NavHeader.js"
import Content from "./components/Content/Index.js"
import Search from "./components/Search/Search.js"
import { Routes, Route } from 'react-router-dom';
// views
import Home from "./views/Home/Home.js"
import Task from "./views/Task/Task.js"
import {useQuery} from "@apollo/client"
// queryes
import { GET_USERS } from "./graphql/getUsers.js";
// styles
import "./App.css"

function App() {
  const { data, error, loading } = useQuery(GET_USERS);
  // console.log("data", data)
  // console.log("error", error)
  // console.log("loading", loading)
  return (
    <div className="App">

      <Sidebar />
      <Content>
        <Search />
        <NavHeader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/task" element={<Task />} />
        </Routes>
      </Content>
    </div>
  );
}

export default App;
