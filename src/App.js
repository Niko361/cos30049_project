import React from "react";
import BasicGrid from "./Views/grid.js";
import Blog from "./Views/blog.js";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Nav from "./Components/Nav.js";
import { Container } from "@mui/material";
import HomeView from "./Views/HomeView.js";

class App extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <Container sx={{ pt: 4 }}>
          <Routes>
            <Route path="/" element={<HomeView />} />
            <Route path="/Blog" element={<Blog />} />
            <Route path="/BasicGrid" element={<BasicGrid />} />
          </Routes>
        </Container>
      </div>
    );
  }
}
export default App;
