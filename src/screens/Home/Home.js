import { Component } from "react";
import Header from "../../common/Header/Header";
import "./Home.css";
import SingleLineImageList from "../../GridList";
import TitlebarImageList from "../../GridListTile";

export default class Home extends Component {
  render() {
    return (
      <div style={{ height: 1100, overflow: "hidden" }}>
        <div className="home-container">
          <div>
            <Header />
          </div>
          <div className="upcoming-movies">Upcoming Movies</div>
          <SingleLineImageList />
        </div>
        <div className="flex-container">
          <div className="left">
            <TitlebarImageList />
          </div>
          <div className="right"></div>
        </div>
      </div>
    );
  }
}
