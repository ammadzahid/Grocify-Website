import React, { useState, useEffect } from 'react';
import Heading from '../../components/Heading/Heading.jsx';
import Productlist from '../Productlist/Productlist.js';
import Card from '../Card/Card.jsx';
import Button from '../Button/Button.jsx';

const Product = () => {
  const categories = ['All', 'Fruits', 'Vegetables', 'Dairy', 'SeaFood'];
  const [activeTab, setActiveTab] = useState('All');
  const [visibleCards, setVisibleCards] = useState(8);

  // ✅ Handle screen size changes
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleCards(4); // Small screen → show 4 cards
      } else {
        setVisibleCards(8); // Large screen → show 8 cards
      }
    };

    handleResize(); // Run once when the component mounts
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // ✅ Filter products by category
  const filteredItems =
    activeTab === 'All'
      ? Productlist
      : Productlist.filter((item) => item.category === activeTab);

  // ✅ Limit visible cards
  const renderCards = filteredItems.slice(0, visibleCards).map((product) => (
    <Card
      key={product.id}
      name={product.name}
      price={product.price}
      category={product.category}
      image={product.image}
    />
  ));

  return (
    <div className="max-w-[1400px] mx-auto px-10 py-20">
      <Heading ColorText="Our" SimpleText="Product" />

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 justify-center mt-10">
        {categories.map((category) => (
          <button
            key={category}
            className={`bg-zinc-100 px-5 py-2 cursor-pointer items-center rounded-lg transition-all duration-200 
              ${
                activeTab === category
                  ? 'bg-gradient-to-b from-orange-400 to-orange-600 text-white hover:scale-105 font-semibold'
                  : 'hover:bg-zinc-200'
              }`}
            onClick={() => setActiveTab(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Cards Grid */}
      <div className="grid md:grid-cols-4 grid-cols-1 my-20 gap-9">
        {renderCards}
      </div>

      {/* View All Button */}
      <div className="w-fit mx-auto">
        <Button text="View All" />
      </div>
    </div>
  );
};

export default Product;
