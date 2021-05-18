import React, { useEffect, useState, useRef } from "react";
import "./News.css";
import News from "./News";

function NewsSet() {
  const [news, setNews] = useState([]);
  const [index, setIndex] = useState(0);

  const indexRef = useRef(index);
  indexRef.current = index;

  const getNewsFrom = async (lang) => {
    try {
      const response = await fetch(
        `https://news-scraper-igcp-636.herokuapp.com/news?lang=${lang}`
      );

      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
      }

      const data = await response.json();

      return { data, error: null };
    } catch (error) {
      return {
        data: null,
        error: error.message,
      };
    }
  };

  const getNews = async () => {
    let engNews = await getNewsFrom("en");

    let espNews = await getNewsFrom("es");

    let sortedNews =
      !engNews.error && !espNews.error
        ? [...engNews.data, ...espNews.data]
        : [];

    return sortedNews;
  };

  useEffect(
    () => {
      let mounted = true;
      const fetchNews = async () => {
        const fetchedNews = await getNews();

        if (mounted) setNews(fetchedNews);
      };
      fetchNews();

      return () => (mounted = false); // Avoiding no-op, that indicates a memory leak, basically canceling the suscriptions
    },
    [] /* The effect is performed just one time */
  );

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (news.length > 0) {
        setIndex(
          indexRef.current === Math.ceil(news.length / 3) - 1 ? 0 : index + 1
        );
      }
    }, 12000);

    return () => clearTimeout(timeout);
  }, [news, index]);

  const NewsItems = () => {
    let index1;
    let index2;
    let index3;

    if (index === Math.ceil(news.length / 3) - 1) {
      const residue = news.length % 3;

      if (residue > 0) {
        index1 = residue === 1 ? index * 3 - 2 : index * 3 - 1;
        index2 = residue === 1 ? index * 3 - 1 : index * 3;
        index3 = residue === 1 ? index * 3 : index * 3 + 1;
      }
    } else {
      index1 = index * 3;
      index2 = index * 3 + 1;
      index3 = index * 3 + 2;
    }

    // console.table(indexRef.current, index1, index2, index3);

    return news.length === 0 ? (
      <>
        <News isCharging={true} side={"left"} news={null} />
        <News isCharging={true} side={"mid"} news={null} />
        <News isCharging={true} side={"right"} news={null} />
      </>
    ) : (
      <>
        <News isCharging={false} side={"left"} news={news[index1]} />
        <News isCharging={false} side={"mid"} news={news[index2]} />
        <News isCharging={false} side={"right"} news={news[index3]} />
      </>
    );
  };

  return window.innerWidth <= 1024 ? (
    <div className="news-sm">
      <div className="news-title-sm text-light">
        <div>Geothermal news from around the world</div>
      </div>
      <div className="news-cards-sm">
        <NewsItems />
      </div>
    </div>
  ) : (
    <div className="news-lg">
      <div className="news-title-lg text-light">
        <div>Geothermal news from around the world</div>
      </div>
      <div className="news-cards-lg">
        <NewsItems />
      </div>
    </div>
  );
}

export default NewsSet;
