import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Category = ({ category }) => {
  return (
    <Link href={`/dictionary/subcategory/${category.id}`}>
      <li key={category.id}>
        <h3>{category.name}</h3>
        <div style={{ backgroundImage: `url(${category.image})` }}></div>
      </li>
    </Link>
  );
};

export default Category;
