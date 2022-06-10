import React from 'react';
import { CloseModalSvg } from '../../assets/svg/Svg';

const MyModal = ({ active, setActive, children }) => {
  const onCloseModal = () => {
    setActive(false);
    // document.body.style.overflowY = 'scroll';
  };

  return (
    <div className={active ? 'modal active' : 'modal'} onClick={onCloseModal}>
      <div
        className={active ? 'modal__content active' : 'modal__content'}
        onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
      <CloseModalSvg />
    </div>
  );
};

export default MyModal;
