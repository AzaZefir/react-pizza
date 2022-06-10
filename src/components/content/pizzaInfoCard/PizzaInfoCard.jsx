import React from 'react';
import { modalInfo } from '../../../data/db';

export const PizzaInfoCard = ({ id }) => {
  return (
    <div>
      <div>
        <div className="modalContainer">
          <img className="modalImg" src={modalInfo[id].img} alt=""></img>
        </div>
        <div className="modalBlockInfo">
          <div className="modalTitle">{modalInfo[id].title}</div>
          <div className="modalDescription">{modalInfo[id].description}</div>
          <div className="modalContent">{modalInfo[id].content}</div>
          <div className="modalContentFooter">{modalInfo[id].contentFooter}</div>
        </div>
      </div>
    </div>
  );
};
