import React from 'react';
import Link from 'next/link';
import { icons } from '../../lib/Icons';

import { ScienceNavWrapper, NavList, ListItemWrapper } from './ScienceNav.styled';

const ScienceNav = () => {
  const {
    GiWhiteBook,
    FiRepeat,
    BsListTask,
    BsCardText,
    MdOutlineHearing,
    SlNote,
    GiChoice,
    GiStreetLight,
    CgPassword,
  } = icons;

  return (
    <ScienceNavWrapper>
      <NavList>
        <li>
          <Link href="/science/lessons">
            <ListItemWrapper>
              <span>
                <GiWhiteBook />
              </span>
              <p>Lekcje</p>
            </ListItemWrapper>
          </Link>
        </li>
        <li>
          <Link href="/science/repetitions">
            <ListItemWrapper>
              <span>
                <FiRepeat />
              </span>
              <p>Powtórki</p>
            </ListItemWrapper>
          </Link>
        </li>
        <li>
          <Link href="/science/exercises">
            <ListItemWrapper>
              <span>
                <BsListTask />
              </span>
              <p>Ćwiczenia</p>
            </ListItemWrapper>
          </Link>
        </li>
        <li>
          <Link href="/science/flashcards">
            <ListItemWrapper>
              <span>
                <BsCardText />
              </span>
              <p>Fiszki</p>
            </ListItemWrapper>
          </Link>
        </li>
        <li>
          <Link href="/science/notes">
            <ListItemWrapper>
              <span>
                <SlNote />
              </span>
              <p>Notatki</p>
            </ListItemWrapper>
          </Link>
        </li>
        <li>
          <Link href="/science/listening">
            <ListItemWrapper>
              <span>
                <MdOutlineHearing />
              </span>
              <p>Słuchanie</p>
            </ListItemWrapper>
          </Link>
        </li>
        <li>
          <Link href="/science/words-choice">
            <ListItemWrapper>
              <span>
                <GiChoice />
              </span>
              <p>Dobieranie słów</p>
            </ListItemWrapper>
          </Link>
        </li>
        <li>
          <Link href="/science/hangman">
            <ListItemWrapper>
              <span>
                <GiStreetLight />
              </span>
              <p>Wisielec</p>
            </ListItemWrapper>
          </Link>
        </li>
        <li>
          <Link href="/science/verbosity">
            <ListItemWrapper>
              <span>
                <CgPassword />
              </span>
              <p>Słowotwór</p>
            </ListItemWrapper>
          </Link>
        </li>
      </NavList>
    </ScienceNavWrapper>
  );
};

export default ScienceNav;
