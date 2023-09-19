import "./styles.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

const Main = () => {
  return <h2>Welcome to Main Page!</h2>;
};

const About = () => {
  return <h2>About our Company</h2>;
};

const News = () => {
  return (
    <>
      <NewsLinks />
      <h2>Our last News</h2>
      <Routes>
        <Route path="/2021" element={<NewsFrom2021 />} />
        <Route path="/2022" element={<NewsFrom2022 />} />
        <Route path="/2023" element={<NewsFrom2023 />} />
      </Routes>
    </>
  );
};

const NewsFrom2021 = () => {
  return <h3>NewsFrom2021</h3>;
};
const NewsFrom2022 = () => {
  return <h3>NewsFrom2022</h3>;
};
const NewsFrom2023 = () => {
  return <h3>NewsFrom2023</h3>;
};

const NavMenu = () => {
  return (
    <div className="navMenu">
      <Link to="/">Main</Link>
      <Link to="/about">About</Link>
      <Link to="/news">News</Link>
    </div>
  );
};
const NotFound = () => {
  return <h2>This page doesn't exit</h2>;
};

const NewsLinks = () => {
  return (
    <div className="navMenu">
      <Link to="/news/2021">2021</Link>
      <Link to="/news/2022">2022</Link>
      <Link to="/news/2023">2023</Link>
    </div>
  );
};

export default function App() {
  return (
    <div className="App">
      <h5>
        Навигация, при которой дочерние маршруты встраиваются в сам компонент
      </h5>
      <Router>
        <NavMenu />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/news/*" element={<News />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}
