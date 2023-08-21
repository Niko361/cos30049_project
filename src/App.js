import React from "react";
import BasicGrid from "./grid.js";
import Blog from "./blog.js";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
class App extends React.Component {
  render() {
    return (
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Blog">Blogs</Link>
            </li>
            <li>
              <Link to="/BasicGrid">BasicGrid</Link>
            </li>
          </ul>
          Week 34
        </nav>
        <Routes>
          <Route path="/Blog" element={<Blog />} />
          <Route path="/BasicGrid" element={<BasicGrid />} />
        </Routes>
      </div>
    );
  }
}
export default App;
