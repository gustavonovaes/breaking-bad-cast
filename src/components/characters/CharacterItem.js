import React from 'react';

const CharacterItem = ({ item }) => {
  return (
    <div className="card card-loading">
      <div className="card-inner">
        <div className="card-front">
          <img data-src={item.img} alt={item.name} className="lazy " />
        </div>

        <div className="card-back">
          <h1>{item.name}</h1>
          <ul>
            <li>
              <strong>Actor Name:</strong>
              <span>{item.portrayed}</span>
            </li>

            <li>
              <strong>Nickname:</strong>
              <span>{item.nickname}</span>
            </li>

            <li>
              <strong>Birthday:</strong>
              <span>{item.birthday}</span>
            </li>

            <li>
              <strong>Status:</strong>
              <span>{item.status}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
};

export default CharacterItem;
