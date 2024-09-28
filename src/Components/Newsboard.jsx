import React, { useState, useEffect } from 'react';
import Newsitem from './Newsitem';

const Newsboard = ({ category }) => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setArticles(data.articles || []);
      } catch (error) {
        console.error("Error fetching the news:", error);
        setError("Failed to fetch news articles.");
        setArticles([]);
      }
    };

    fetchData();
  }, [category]);

  return (
    <div>
      <h2 className="text-center">
        Latest <span className="badge bg-danger">News</span>
      </h2>
      {error ? (
        <p className="text-center text-danger">{error}</p>
      ) : articles && articles.length > 0 ? (
        articles.map((news, index) => (
          <Newsitem
            key={index}
            title={news.title}
            description={news.description}
            src={news.urlToImage}
            url={news.url}
          />
        ))
      ) : (
        <p className="text-center">No news articles available.</p>
      )}
    </div>
  );
};

export default Newsboard;
