import React, { useEffect, useState } from 'react';

function CategoryNews({ categoryName, headingText }) {
  const [categoryNews, setCategoryNews] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [expandedId, setExpandedId] = useState(null);
  const newsPerPage = 6;

  const lastIndex = currentPage * newsPerPage;
  const firstIndex = lastIndex - newsPerPage;
  const currentNews = categoryNews.slice(firstIndex, lastIndex);
  const totalPages = Math.ceil(categoryNews.length / newsPerPage);

  useEffect(() => {
    const allNews = JSON.parse(localStorage.getItem("news")) || [];
    const filtered = categoryName === "home" 
      ? allNews 
      : allNews.filter(item => item.category === categoryName);
    setCategoryNews(filtered);
  }, [categoryName]);

  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(prev => prev + 1);
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) setCurrentPage(prev => prev - 1);
  };

  const toggleReadMore = (id) => {
    setExpandedId(prevId => prevId === id ? null : id);
  };

  return (
    <div className='All-main-div'>
      <div className='main-div'>
        <h2>{headingText}</h2>
        <div className="news-grid">
          {currentNews.map(item => (
            <div key={item.id} className='main-class-div'>
              <img src={item.image} alt={item.title} />
              <h3>{item.title}</h3>
              <p>
                {expandedId === item.id
                  ? item.description
                  : item.description.length > 100
                    ? item.description.slice(0, 100) + '...'
                    : item.description
                }
              </p>
              {item.description.length > 100 && (
                <button onClick={() => toggleReadMore(item.id)}>
                  {expandedId === item.id ? "Show Less" : "Read More"}
                </button>
              )}
            </div>
          ))}
        </div>

        <div className='pagination-div'>
          <button onClick={goToPreviousPage} >Previous</button>
          <span>Page {currentPage} of {totalPages}</span>
          <button onClick={goToNextPage} >Next</button>
        </div>
      </div>
    </div>
  );
}

export default CategoryNews;
  




 