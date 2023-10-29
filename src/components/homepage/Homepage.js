import React from "react"
import './Homepage.css'
import Header from "../Header/Header"
import Widget from "../Widgets/Widget"
import Content from "../Content/Content"
import Sidebar from '../Sidebar/Sidebar'

const Homepage = () => {
  return (
    <>
      <div className="App">
        <Header />
      </div>
      <div>
        <Sidebar />
      </div>
      <div>
        <Content />
        <Content />
      </div>
      <div>
        <Widget />
      </div>
    </>
  )
}
export default Homepage