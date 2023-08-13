import React, { useState, useEffect } from 'react';

function Article() {
  const [article, setArticle] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/get-article')
      .then(response => response.json())
      .then(data => setArticle(data.articleContent))
      .catch(err => console.error('Error fetching article:', err));
  }, []);

  return (
    <div>
        {article}
    </div>
  );
}

export default Article;
