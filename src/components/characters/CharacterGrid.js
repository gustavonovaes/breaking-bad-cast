import React from 'react';
import CharacterItem from './CharacterItem';

import spinner from '../../assets/img/spinner.gif';
import setupLazyLoadingImages from '../../utils/setupLazyLoadingImages';
const CharacterGrid = ({ isLoading, items }) => {
  React.useEffect(() => {
    if (isLoading) {
      return;
    }

    setupLazyLoadingImages('.lazy', null, (img) => {
      img.closest('.card').classList.remove('card-loading');
    });

  }, [isLoading]);

  if (isLoading) {
    return (
      <div className="loading">
        <img src={spinner} alt="Loading" />
      </div>
    );
  }

  return (
    <section className="cards">
      {items.map((item) =>
        <CharacterItem key={item.char_id} item={item} />
      )}
    </section>
  );
};

export default CharacterGrid;
