  import React, { useState } from 'react';

  export default function NewsCard({ item }) {
    const [readMore, setReadMore] = useState(false);

    return (
      <div style={{ border: "1px solid #ccc", padding: "10px", marginBottom: "10px" }}>
        <h3>{item.title} <small>({item.category})</small></h3>
        <img src={item.image} alt={item.title} width="300" />
        <p>{readMore ? item.description : item.description.slice(0, 200) + "..."}</p>
        <button onClick={() => setReadMore(!readMore)}>
          {readMore ? "Show Less" : "Read More"}
        </button>
      </div>
    );
  }

