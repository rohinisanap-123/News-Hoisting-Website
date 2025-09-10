import React from 'react';

import CategoryNews from '../components/Categories';

export default function Home() {
  return (
    <div>
      <CategoryNews 
        categoryName="home" 
        headingText="📰 Latest Headlines from All Categories" 
      />
    </div>
  );
}


