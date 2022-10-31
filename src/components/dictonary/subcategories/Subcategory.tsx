import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ISubcategory } from '../../../types';
const Subcategory = ({ subcategory }: { subcategory: ISubcategory }) => {
  return (
    <Link href={`/dictionary/words/${subcategory.id}`} key={subcategory.id}>
      <li key={subcategory.id}>
        <h3>{subcategory.title}</h3>
        <Image
          src={subcategory.image}
          alt="Picture of the author"
          width={300}
          height={200}
        />
      </li>
    </Link>
  );
};

export default Subcategory;
