import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ICategory } from '../../../types';

const Category = ({ category }: { category: ICategory }) => {
  return (
    <Link href={`/dictionary/subcategory/${category.id}`}>
      <li key={category.id}>
        <h3>{category.name}</h3>
        <Image
          src={category.image}
          alt="Picture of the author"
          width={300}
          height={200}
        />
      </li>
    </Link>
  );
};

export default Category;
