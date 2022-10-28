import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Subcategory = ({subcategory}) => {
  return (
    <Link href={`/dictionary/words/${subcategory.id}`} key={subcategory.id}>
      <li key={subcategory.id}>
        <h3>{subcategory.title}</h3>
        <div style={{ backgroundImage: `url(${subcategory.image})` }}></div>
      </li>
    </Link>
  );
};

export default Subcategory;
