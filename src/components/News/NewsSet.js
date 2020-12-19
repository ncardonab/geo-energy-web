import React, { Component } from "react";
import "./News.css";
import News from "./News";

class NewsSet extends Component {
  state = {
    news: [],
  };

  getNewsFrom = async (lang) => {
    const data = await fetch(`http://geo-energy-api.herokuapp.com/news${lang}`);

    const news = await data.json();

    return news;
  };

  getNews = async () => {
    let engNews = await this.getNewsFrom("ENG");
    engNews = engNews.slice(0, 2);

    let espNews = await this.getNewsFrom("ESP");
    espNews = espNews.slice(0, 1);

    let sortedNews = [...engNews, ...espNews];
    return sortedNews;
  };

  componentDidMount() {
    this.getNews().then((news) => {
      this.setState({
        news: news,
      });
    });
  }
  render() {
    const isEmpty = this.state.news.length === 0;

    const [engNews1, engNews2, espNews1] = this.state.news;

    if (window.innerWidth <= 540) {
      return (
        <div className="news-sm">
          <div className="news-title-sm text-light">
            <div>Geothermal news from around the world</div>
          </div>
          <div className="news-cards-sm">
            <News isCharging={isEmpty} side={"left"} news={engNews1} />
            <News isCharging={isEmpty} side={"mid"} news={espNews1} />
            <News isCharging={isEmpty} side={"right"} news={engNews2} />
          </div>
        </div>
      );
    } else if (window.innerWidth > 540) {
      return (
        <div className="news-lg">
          <div className="news-title-lg text-light">
            <div>Geothermal news from around the world</div>
          </div>
          <div className="news-cards-lg">
            <News isCharging={isEmpty} side={"left"} news={engNews1} />
            <News isCharging={isEmpty} side={"mid"} news={espNews1} />
            <News isCharging={isEmpty} side={"right"} news={engNews2} />
          </div>
        </div>
      );
    }
  }
}

export default NewsSet;
