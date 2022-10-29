import React from 'react';
import Link from 'next/link';
import { ICategory } from '../../../types';
const Category = ({ category }:{category:ICategory}) => {
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
